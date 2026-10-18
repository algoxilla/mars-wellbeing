"use client";

import React, { useState, useTransition } from "react";
import { Trash2, AlertTriangle, Loader2 } from "lucide-react";
import { deleteOwnAccountAction } from "@/app/auth/actions";

export function DeleteAccountButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirmText !== "DELETE") {
      setErrorMessage("Please type DELETE to confirm.");
      return;
    }

    startTransition(async () => {
      const res = await deleteOwnAccountAction();
      if (res && !res.success) {
        setErrorMessage(res.error || "Failed to delete account.");
      }
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#D96C68] bg-[#FFFFFF] hover:bg-[#FFF2F2] border border-[#D96C68]/40 rounded-full transition-colors cursor-pointer"
      >
        <Trash2 className="w-3.5 h-3.5" />
        <span>Delete Sanctuary Account</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#1D1D1F]/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] border border-[#D2D2D7] rounded-[24px] p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 bg-[#FFF2F2] text-[#D96C68] rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              Delete Account Permanently?
            </h3>

            <p className="text-xs text-[#6E6E73] leading-relaxed">
              This action cannot be undone. All your saved profile records and associated account data will be permanently erased from the MARS database.
            </p>

            {errorMessage && (
              <p className="text-xs text-[#D96C68] font-semibold">{errorMessage}</p>
            )}

            <div className="space-y-1.5 pt-2">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F]">
                Type <span className="font-mono font-bold text-[#D96C68]">DELETE</span> to confirm:
              </label>
              <input
                type="text"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder="DELETE"
                className="w-full px-4 py-2 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-xs font-mono uppercase text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#D96C68]"
              />
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3">
              <button
                type="button"
                disabled={isPending}
                onClick={() => {
                  setIsOpen(false);
                  setConfirmText("");
                  setErrorMessage(null);
                }}
                className="px-4 py-2 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-full transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isPending || confirmText !== "DELETE"}
                onClick={handleDelete}
                className="px-4 py-2 text-xs font-semibold bg-[#D96C68] text-[#FFFFFF] hover:bg-[#C65A57] rounded-full disabled:opacity-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <span>Confirm Permanent Deletion</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
