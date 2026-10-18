"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { Profile, EarlyAccessLead, AdminStats, UserRole, LeadStatus } from "@/lib/supabase/types";
import { revalidatePath } from "next/cache";

export type AdminActionResult<T = unknown> = {
  success: boolean;
  error?: string;
  data?: T;
};

/**
 * Server-side verification that the current caller has the 'admin' role in public.profiles.
 * Never trusts client headers or client assertions.
 */
export async function verifyAdminCaller() {
  if (!isSupabaseConfigured()) {
    return { authorized: false, reason: "Supabase is not configured." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { authorized: false, reason: "Database unavailable." };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { authorized: false, reason: "Unauthenticated session." };
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("id, email, full_name, role")
    .eq("id", user.id)
    .maybeSingle();

  if (error || !profile) {
    return { authorized: false, reason: "Profile not found." };
  }

  if (profile.role !== "admin") {
    return {
      authorized: false,
      reason: `Account '${profile.email}' has role '${profile.role}'. Administrator role is required.`,
      profile,
    };
  }

  return { authorized: true, user, profile, supabase };
}

/**
 * Fetch all admin stats, user list, and waitlist leads with search/filters.
 */
export async function getAdminDashboardData(params?: {
  userSearch?: string;
  userRole?: string;
  leadSearch?: string;
  leadStatus?: string;
}) {
  const authCheck = await verifyAdminCaller();
  if (!authCheck.authorized) {
    return {
      authorized: false,
      reason: authCheck.reason,
      profile: authCheck.profile,
      stats: null,
      users: [],
      leads: [],
    };
  }

  const supabase = authCheck.supabase!;

  // 1. Fetch Users Query
  let usersQuery = supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  if (params?.userSearch) {
    const s = params.userSearch.trim();
    usersQuery = usersQuery.or(`email.ilike.%${s}%,full_name.ilike.%${s}%`);
  }

  if (params?.userRole && params.userRole !== "all") {
    usersQuery = usersQuery.eq("role", params.userRole);
  }

  const { data: users, error: usersError } = await usersQuery;

  // 2. Fetch Leads Query
  let leadsQuery = supabase
    .from("early_access_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (params?.leadSearch) {
    const ls = params.leadSearch.trim();
    leadsQuery = leadsQuery.or(`email.ilike.%${ls}%,full_name.ilike.%${ls}%,city.ilike.%${ls}%`);
  }

  if (params?.leadStatus && params.leadStatus !== "all") {
    leadsQuery = leadsQuery.eq("status", params.leadStatus);
  }

  const { data: leads, error: leadsError } = await leadsQuery;

  // 3. Compute Stats
  const allUsersList = (users as Profile[]) || [];
  const allLeadsList = (leads as EarlyAccessLead[]) || [];

  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const stats: AdminStats = {
    totalUsers: allUsersList.length,
    adminUsers: allUsersList.filter((u) => u.role === "admin").length,
    regularUsers: allUsersList.filter((u) => u.role === "user").length,
    totalLeads: allLeadsList.length,
    recentSignups7d: allUsersList.filter((u) => new Date(u.created_at) >= sevenDaysAgo).length,
    recentSignups30d: allUsersList.filter((u) => new Date(u.created_at) >= thirtyDaysAgo).length,
  };

  return {
    authorized: true,
    currentUser: authCheck.profile,
    stats,
    users: allUsersList,
    leads: allLeadsList,
    usersError: usersError?.message,
    leadsError: leadsError?.message,
  };
}

/**
 * Admin action: Change user role ('user' <-> 'admin').
 */
export async function updateUserRole(targetUserId: string, newRole: UserRole): Promise<AdminActionResult> {
  const authCheck = await verifyAdminCaller();
  if (!authCheck.authorized) {
    return { success: false, error: authCheck.reason };
  }

  const supabase = authCheck.supabase!;

  const { error } = await supabase
    .from("profiles")
    .update({ role: newRole, updated_at: new Date().toISOString() })
    .eq("id", targetUserId);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/admin");
  return { success: true };
}

/**
 * Admin action: Update status of early access lead.
 */
export async function updateLeadStatus(
  leadId: string,
  newStatus: LeadStatus,
  notes?: string
): Promise<AdminActionResult> {
  const authCheck = await verifyAdminCaller();
  if (!authCheck.authorized) {
    return { success: false, error: authCheck.reason };
  }

  const supabase = authCheck.supabase!;

  const updates: Record<string, unknown> = {
    status: newStatus,
    updated_at: new Date().toISOString(),
  };
  if (notes !== undefined) {
    updates.notes = notes;
  }

  const { error } = await supabase.from("early_access_leads").update(updates).eq("id", leadId);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/admin");
  return { success: true };
}

/**
 * Admin action: Delete a user profile and auth account.
 */
export async function adminDeleteUser(targetUserId: string): Promise<AdminActionResult> {
  const authCheck = await verifyAdminCaller();
  if (!authCheck.authorized) {
    return { success: false, error: authCheck.reason };
  }

  // Prevent self-deletion via admin panel
  if (authCheck.user?.id === targetUserId) {
    return { success: false, error: "You cannot delete your own active administrator account from this panel." };
  }

  // Try service role client first if available to also remove from auth.users
  const adminClient = createAdminClient();
  if (adminClient) {
    const { error: authDeleteError } = await adminClient.auth.admin.deleteUser(targetUserId);
    if (!authDeleteError) {
      revalidatePath("/admin");
      return { success: true };
    }
  }

  // Fallback to RLS delete on profiles
  const supabase = authCheck.supabase!;
  const { error } = await supabase.from("profiles").delete().eq("id", targetUserId);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/admin");
  return { success: true };
}

/**
 * Admin action: Delete an early access lead record.
 */
export async function adminDeleteLead(leadId: string): Promise<AdminActionResult> {
  const authCheck = await verifyAdminCaller();
  if (!authCheck.authorized) {
    return { success: false, error: authCheck.reason };
  }

  const supabase = authCheck.supabase!;
  const { error } = await supabase.from("early_access_leads").delete().eq("id", leadId);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/admin");
  return { success: true };
}
