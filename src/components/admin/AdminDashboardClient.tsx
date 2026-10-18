"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { Profile, EarlyAccessLead, AdminStats, UserRole, LeadStatus } from "@/lib/supabase/types";
import {
  updateUserRole,
  updateLeadStatus,
  adminDeleteUser,
  adminDeleteLead,
} from "@/app/admin/actions";
import {
  Users,
  ShieldCheck,
  UserCheck,
  UserX,
  FileSpreadsheet,
  Search,
  Filter,
  Trash2,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowUpRight,
  Download,
  AlertCircle,
  Loader2,
  Calendar,
  RefreshCw,
} from "lucide-react";

interface AdminDashboardClientProps {
  initialStats: AdminStats;
  initialUsers: Profile[];
  initialLeads: EarlyAccessLead[];
  currentAdminEmail: string;
}

export function AdminDashboardClient({
  initialStats,
  initialUsers,
  initialLeads,
  currentAdminEmail,
}: AdminDashboardClientProps) {
  const [users, setUsers] = useState<Profile[]>(initialUsers);
  const [leads, setLeads] = useState<EarlyAccessLead[]>(initialLeads);
  const [stats, setStats] = useState<AdminStats>(initialStats);

  // Tabs: 'users' | 'leads' | 'security'
  const [activeTab, setActiveTab] = useState<"users" | "leads" | "security">("users");

  // Users Filters
  const [userSearch, setUserSearch] = useState("");
  const [userRoleFilter, setUserRoleFilter] = useState<"all" | "admin" | "user">("all");

  // Leads Filters
  const [leadSearch, setLeadSearch] = useState("");
  const [leadStatusFilter, setLeadStatusFilter] = useState<"all" | LeadStatus>("all");

  // Action status feedback
  const [actionMessage, setActionMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  // Filtered Users
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      !userSearch ||
      u.email.toLowerCase().includes(userSearch.toLowerCase()) ||
      (u.full_name && u.full_name.toLowerCase().includes(userSearch.toLowerCase()));
    const matchesRole = userRoleFilter === "all" || u.role === userRoleFilter;
    return matchesSearch && matchesRole;
  });

  // Filtered Leads
  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      !leadSearch ||
      l.email.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.full_name.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.city.toLowerCase().includes(leadSearch.toLowerCase());
    const matchesStatus = leadStatusFilter === "all" || l.status === leadStatusFilter;
    return matchesSearch && matchesStatus;
  });

  // Handle Role Toggle
  const handleRoleToggle = (targetUserId: string, currentRole: UserRole) => {
    const newRole: UserRole = currentRole === "admin" ? "user" : "admin";
    if (
      currentRole === "admin" &&
      users.find((u) => u.id === targetUserId)?.email === currentAdminEmail
    ) {
      alert("You cannot demote your own active admin account.");
      return;
    }

    startTransition(async () => {
      const res = await updateUserRole(targetUserId, newRole);
      if (res.success) {
        setUsers((prev) =>
          prev.map((u) => (u.id === targetUserId ? { ...u, role: newRole } : u))
        );
        setStats((prev) => ({
          ...prev,
          adminUsers: newRole === "admin" ? prev.adminUsers + 1 : prev.adminUsers - 1,
          regularUsers: newRole === "user" ? prev.regularUsers + 1 : prev.regularUsers - 1,
        }));
        setActionMessage({
          type: "success",
          text: `Role successfully updated to '${newRole}'.`,
        });
        setTimeout(() => setActionMessage(null), 4000);
      } else {
        setActionMessage({ type: "error", text: res.error || "Failed to update role." });
      }
    });
  };

  // Handle Delete User
  const handleDeleteUser = (targetUserId: string, email: string) => {
    if (email === currentAdminEmail) {
      alert("You cannot delete your own active admin account.");
      return;
    }
    if (!window.confirm(`Are you sure you want to permanently delete user account '${email}'?`)) {
      return;
    }

    startTransition(async () => {
      const res = await adminDeleteUser(targetUserId);
      if (res.success) {
        setUsers((prev) => prev.filter((u) => u.id !== targetUserId));
        setStats((prev) => ({
          ...prev,
          totalUsers: prev.totalUsers - 1,
        }));
        setActionMessage({ type: "success", text: `User '${email}' deleted.` });
        setTimeout(() => setActionMessage(null), 4000);
      } else {
        setActionMessage({ type: "error", text: res.error || "Failed to delete user." });
      }
    });
  };

  // Handle Lead Status Change
  const handleLeadStatusChange = (leadId: string, newStatus: LeadStatus) => {
    startTransition(async () => {
      const res = await updateLeadStatus(leadId, newStatus);
      if (res.success) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
        setActionMessage({
          type: "success",
          text: `Waitlist lead status updated to '${newStatus}'.`,
        });
        setTimeout(() => setActionMessage(null), 3000);
      } else {
        setActionMessage({ type: "error", text: res.error || "Failed to update lead." });
      }
    });
  };

  // Handle Delete Lead
  const handleDeleteLead = (leadId: string, email: string) => {
    if (!window.confirm(`Delete early-access lead for '${email}'?`)) return;

    startTransition(async () => {
      const res = await adminDeleteLead(leadId);
      if (res.success) {
        setLeads((prev) => prev.filter((l) => l.id !== leadId));
        setStats((prev) => ({ ...prev, totalLeads: prev.totalLeads - 1 }));
        setActionMessage({ type: "success", text: `Lead '${email}' removed.` });
        setTimeout(() => setActionMessage(null), 3000);
      } else {
        setActionMessage({ type: "error", text: res.error || "Failed to delete lead." });
      }
    });
  };

  // CSV Export for Leads
  const exportLeadsCSV = () => {
    if (leads.length === 0) {
      alert("No leads available to export.");
      return;
    }

    const headers = ["ID", "Full Name", "Email", "City", "Interests", "Status", "Date Submitted"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.full_name.replace(/"/g, '""')}"`,
      `"${l.email.replace(/"/g, '""')}"`,
      `"${l.city.replace(/"/g, '""')}"`,
      `"${(l.interests || []).join("; ").replace(/"/g, '""')}"`,
      l.status,
      new Date(l.created_at).toISOString(),
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `mars_early_access_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      {/* 1. Summary Metric KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Accounts */}
        <div className="p-5 rounded-3xl bg-[#FAF7F2] border border-[#A8B9A2]/40 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-[#65716A]">
            <span className="font-semibold uppercase tracking-wider">Total Accounts</span>
            <Users className="w-4 h-4 text-[#153D35]" />
          </div>
          <div className="font-display text-3xl font-bold text-[#153D35]">
            {stats.totalUsers}
          </div>
          <div className="text-[11px] text-[#65716A] flex items-center gap-1.5 pt-1">
            <span className="font-semibold text-[#153D35]">{stats.adminUsers}</span> Admins ·{" "}
            <span className="font-semibold text-[#153D35]">{stats.regularUsers}</span> Members
          </div>
        </div>

        {/* Early Access Leads */}
        <div className="p-5 rounded-3xl bg-[#FAF7F2] border border-[#A8B9A2]/40 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-[#65716A]">
            <span className="font-semibold uppercase tracking-wider">Early Access Leads</span>
            <Sparkles className="w-4 h-4 text-[#C9A15A]" />
          </div>
          <div className="font-display text-3xl font-bold text-[#153D35]">
            {stats.totalLeads}
          </div>
          <div className="text-[11px] text-[#65716A] pt-1">
            Registered waitlist interest
          </div>
        </div>

        {/* 7-Day Signups */}
        <div className="p-5 rounded-3xl bg-[#FAF7F2] border border-[#A8B9A2]/40 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-[#65716A]">
            <span className="font-semibold uppercase tracking-wider">New Signups (7d)</span>
            <Clock className="w-4 h-4 text-[#153D35]" />
          </div>
          <div className="font-display text-3xl font-bold text-[#153D35]">
            {stats.recentSignups7d}
          </div>
          <div className="text-[11px] text-[#65716A] pt-1">
            Accounts created past week
          </div>
        </div>

        {/* 30-Day Activity */}
        <div className="p-5 rounded-3xl bg-[#FAF7F2] border border-[#A8B9A2]/40 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-[#65716A]">
            <span className="font-semibold uppercase tracking-wider">New Signups (30d)</span>
            <Calendar className="w-4 h-4 text-[#153D35]" />
          </div>
          <div className="font-display text-3xl font-bold text-[#153D35]">
            {stats.recentSignups30d}
          </div>
          <div className="text-[11px] text-[#65716A] pt-1">
            Accounts created past month
          </div>
        </div>
      </div>

      {/* Action Notification Message */}
      {actionMessage && (
        <div
          className={`p-4 rounded-2xl text-xs flex items-center justify-between animate-in fade-in ${
            actionMessage.type === "success"
              ? "bg-[#EAF1ED] border border-[#B4C8BE] text-[#153D35]"
              : "bg-[#FDF2F0] border border-[#F5C2B8] text-[#9B2C1C]"
          }`}
        >
          <div className="flex items-center gap-2">
            {actionMessage.type === "success" ? (
              <CheckCircle className="w-4 h-4 text-[#153D35]" />
            ) : (
              <AlertCircle className="w-4 h-4 text-[#9B2C1C]" />
            )}
            <span>{actionMessage.text}</span>
          </div>
          <button
            onClick={() => setActionMessage(null)}
            className="text-[10px] font-semibold uppercase tracking-wider underline cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#A8B9A2]/30 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab("users")}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "users"
              ? "bg-[#153D35] text-[#FFFFFF] shadow-xs"
              : "bg-[#FAF7F2] text-[#65716A] hover:text-[#153D35] border border-[#A8B9A2]/40"
          }`}
        >
          Registered Members ({users.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("leads")}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "leads"
              ? "bg-[#153D35] text-[#FFFFFF] shadow-xs"
              : "bg-[#FAF7F2] text-[#65716A] hover:text-[#153D35] border border-[#A8B9A2]/40"
          }`}
        >
          Early Access Leads ({leads.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("security")}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "security"
              ? "bg-[#153D35] text-[#FFFFFF] shadow-xs"
              : "bg-[#FAF7F2] text-[#65716A] hover:text-[#153D35] border border-[#A8B9A2]/40"
          }`}
        >
          Security & Access Policy
        </button>
      </div>

      {/* TAB 1: USERS MANAGEMENT */}
      {activeTab === "users" && (
        <div className="bg-[#FAF7F2] border border-[#A8B9A2]/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#65716A] absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="text"
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                placeholder="Search by email or name..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FFFFFF] border border-[#A8B9A2]/60 text-xs text-[#1B2926] placeholder-[#65716A]/50 focus:outline-none focus:ring-2 focus:ring-[#153D35]"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#65716A] flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Role:</span>
              </span>
              <select
                value={userRoleFilter}
                onChange={(e) => setUserRoleFilter(e.target.value as "all" | "admin" | "user")}
                className="px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#A8B9A2]/60 text-xs text-[#1B2926] focus:outline-none focus:ring-1 focus:ring-[#153D35]"
              >
                <option value="all">All Roles</option>
                <option value="admin">Admins Only</option>
                <option value="user">Members Only</option>
              </select>
            </div>
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#A8B9A2]/30">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#E3E9DE]/60 text-[#153D35] uppercase tracking-wider font-semibold border-b border-[#A8B9A2]/30">
                  <th className="py-3 px-4">Member Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Registered Date</th>
                  <th className="py-3 px-4">Last Sign In</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#A8B9A2]/20 bg-[#FFFFFF]">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-xs text-[#65716A]">
                      No users match the search criteria.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => {
                    const isSelf = user.email === currentAdminEmail;
                    return (
                      <tr key={user.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-[#1B2926]">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-[#E3E9DE] text-[#153D35] font-bold text-[11px] flex items-center justify-center shrink-0">
                              {(user.full_name || user.email).slice(0, 2).toUpperCase()}
                            </div>
                            <span>{user.full_name || "—"}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[#1B2926]">
                          {user.email}
                          {isSelf && (
                            <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-[#EAF1ED] text-[#153D35] font-sans font-semibold">
                              You
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          {user.role === "admin" ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#153D35] text-[#F5F0E7]">
                              <ShieldCheck className="w-3 h-3 text-[#C9A15A]" />
                              Admin
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#E3E9DE] text-[#153D35]">
                              User
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-[#65716A]">
                          {new Date(user.created_at).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td className="py-3.5 px-4 text-[#65716A]">
                          {user.last_sign_in_at
                            ? new Date(user.last_sign_in_at).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "Never"}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            {/* Role Toggle Button */}
                            {!isSelf && (
                              <button
                                type="button"
                                disabled={isPending}
                                onClick={() => handleRoleToggle(user.id, user.role)}
                                className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                                  user.role === "admin"
                                    ? "bg-[#FAF7F2] text-[#65716A] hover:bg-[#E3E9DE] border border-[#A8B9A2]/40"
                                    : "bg-[#153D35] text-[#FFFFFF] hover:bg-[#1B2926]"
                                }`}
                                title={user.role === "admin" ? "Demote to User" : "Promote to Admin"}
                              >
                                {user.role === "admin" ? "Demote" : "Make Admin"}
                              </button>
                            )}

                            {/* Delete User */}
                            {!isSelf && (
                              <button
                                type="button"
                                disabled={isPending}
                                onClick={() => handleDeleteUser(user.id, user.email)}
                                className="p-1 text-[#9B2C1C] hover:bg-[#FDF2F0] rounded-md transition-colors cursor-pointer"
                                title="Delete user account"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: EARLY ACCESS LEADS */}
      {activeTab === "leads" && (
        <div className="bg-[#FAF7F2] border border-[#A8B9A2]/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#65716A] absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="text"
                value={leadSearch}
                onChange={(e) => setLeadSearch(e.target.value)}
                placeholder="Search leads by name, email, or city..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FFFFFF] border border-[#A8B9A2]/60 text-xs text-[#1B2926] placeholder-[#65716A]/50 focus:outline-none focus:ring-2 focus:ring-[#153D35]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#65716A]">Status:</span>
                <select
                  value={leadStatusFilter}
                  onChange={(e) => setLeadStatusFilter(e.target.value as "all" | LeadStatus)}
                  className="px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#A8B9A2]/60 text-xs text-[#1B2926] focus:outline-none focus:ring-1 focus:ring-[#153D35]"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="invited">Invited</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <button
                type="button"
                onClick={exportLeadsCSV}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#153D35] text-[#FFFFFF] hover:bg-[#1B2926] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#C9A15A]" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Leads Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#A8B9A2]/30">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#E3E9DE]/60 text-[#153D35] uppercase tracking-wider font-semibold border-b border-[#A8B9A2]/30">
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4">Expressed Interests</th>
                  <th className="py-3 px-4">Submitted</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#A8B9A2]/20 bg-[#FFFFFF]">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-xs text-[#65716A]">
                      No early access enquiries recorded yet.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="py-3.5 px-4 font-medium text-[#1B2926]">
                        <p className="font-semibold">{lead.full_name}</p>
                        <p className="font-mono text-[#65716A] text-[11px]">{lead.email}</p>
                      </td>
                      <td className="py-3.5 px-4 text-[#1B2926]">{lead.city}</td>
                      <td className="py-3.5 px-4 text-[#65716A]">
                        {lead.interests && lead.interests.length > 0 ? (
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {lead.interests.map((int, i) => (
                              <span
                                key={i}
                                className="px-1.5 py-0.5 rounded bg-[#FAF7F2] border border-[#A8B9A2]/30 text-[10px] text-[#153D35]"
                              >
                                {int}
                              </span>
                            ))}
                          </div>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-[#65716A]">
                        {new Date(lead.created_at).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          value={lead.status}
                          disabled={isPending}
                          onChange={(e) =>
                            handleLeadStatusChange(lead.id, e.target.value as LeadStatus)
                          }
                          className="px-2 py-1 rounded bg-[#FAF7F2] border border-[#A8B9A2]/50 text-[11px] font-medium text-[#153D35] focus:outline-none"
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="invited">Invited</option>
                          <option value="archived">Archived</option>
                        </select>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          type="button"
                          disabled={isPending}
                          onClick={() => handleDeleteLead(lead.id, lead.email)}
                          className="p-1 text-[#9B2C1C] hover:bg-[#FDF2F0] rounded-md transition-colors cursor-pointer"
                          title="Delete waitlist record"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: SECURITY & ACCESS POLICIES */}
      {activeTab === "security" && (
        <div className="bg-[#FAF7F2] border border-[#A8B9A2]/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold uppercase text-[#153D35] flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#C9A15A]" />
              <span>Architectural Security & Row Level Security (RLS)</span>
            </h3>
            <p className="text-xs text-[#65716A] leading-relaxed max-w-3xl">
              MARS enforces access control at both the database level (PostgreSQL RLS policies) and the application layer (Next.js server-verified Server Actions and Middleware).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-[#F5F0E7] border border-[#A8B9A2]/40 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#153D35] block">
                01. Database RLS Enforcement
              </span>
              <p className="text-[#1B2926] leading-relaxed">
                Table <code className="font-mono text-[#153D35]">public.profiles</code> has RLS active. Ordinary members can strictly query and modify their own records. Cross-account enumeration is blocked at the database engine level.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F0E7] border border-[#A8B9A2]/40 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#153D35] block">
                02. Server-Verified Role Check
              </span>
              <p className="text-[#1B2926] leading-relaxed">
                The <code className="font-mono text-[#153D35]">/admin</code> route and all administrative mutations execute server-side verification using <code className="font-mono text-[#153D35]">verifyAdminCaller()</code> and PostgreSQL function <code className="font-mono text-[#153D35]">is_admin()</code>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F0E7] border border-[#A8B9A2]/40 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#153D35] block">
                03. User Account Self-Deletion
              </span>
              <p className="text-[#1B2926] leading-relaxed">
                Complies with digital privacy standards. Calling <code className="font-mono text-[#153D35]">delete_user_account()</code> immediately erases user credentials and cascades profile deletion.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#EAF1ED] border border-[#B4C8BE] space-y-2 text-xs">
            <span className="font-bold text-[#153D35] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#153D35]" />
              Promoting New Administrators
            </span>
            <p className="text-[#1B2926] leading-relaxed">
              To promote a user to administrator, either use the <strong>Make Admin</strong> button in the Members table above, or run this query in your Supabase SQL Editor:
            </p>
            <pre className="p-3 bg-[#FAF7F2] border border-[#A8B9A2]/40 rounded-xl font-mono text-[11px] text-[#153D35] overflow-x-auto">
              UPDATE public.profiles SET role = &apos;admin&apos; WHERE email = &apos;target-email@marswellbeing.in&apos;;
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
