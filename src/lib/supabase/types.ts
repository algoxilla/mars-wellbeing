export type UserRole = "user" | "admin";

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: UserRole;
  avatar_url: string | null;
  last_sign_in_at: string | null;
  created_at: string;
  updated_at: string;
}

export type LeadStatus = "pending" | "contacted" | "invited" | "archived";

export interface EarlyAccessLead {
  id: string;
  full_name: string;
  email: string;
  city: string;
  interests: string[];
  status: LeadStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface AdminStats {
  totalUsers: number;
  adminUsers: number;
  regularUsers: number;
  totalLeads: number;
  recentSignups7d: number;
  recentSignups30d: number;
}
