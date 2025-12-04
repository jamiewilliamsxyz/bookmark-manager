"use client";

import { useEffect } from "react";
import { useModal } from "@/hooks/context-hooks/useModal";
import CreateBookmarkForm from "@/components/features/bookmarks/bookmark-forms/CreateBookmarkForm";
import DeleteAccountConfirmation from "@/components/features/auth/DeleteAccountConfirmation";
import DeleteBookmarkConfirmation from "@/components/features/bookmarks/DeleteBookmarkConfirmation";
import EditBookmarkForm from "@/components/features/bookmarks/bookmark-forms/EditBookmarkForm";
import ChangePasswordForm from "../features/auth/auth-forms/ChangePasswordForm";
import type { ModalProps } from "@/types";

const ModalHandler = ({ children }: ModalProps) => {
  const { currentModal, closeModal } = useModal();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (currentModal && e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [currentModal, closeModal]);

  return (
    <>
      <div
        inert={!!currentModal}
        className={`${
          currentModal ? "opacity-75 blur-[3px] pointer-events-none" : ""
        } flex-1 flex flex-col`}
      >
        {children}
      </div>

      {currentModal && (
        <div
          onClick={closeModal}
          className="z-50 fixed inset-0 flex justify-center items-center px-6 sm:px-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="w-full min-[444px]:w-auto"
          >
            {/* Modals */}
            {currentModal === "createBookmark" && <CreateBookmarkForm />}
            {currentModal === "deleteAccount" && <DeleteAccountConfirmation />}
            {currentModal === "deleteBookmark" && (
              <DeleteBookmarkConfirmation />
            )}
            {currentModal === "editBookmark" && <EditBookmarkForm />}
            {currentModal === "changePassword" && <ChangePasswordForm />}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalHandler;
