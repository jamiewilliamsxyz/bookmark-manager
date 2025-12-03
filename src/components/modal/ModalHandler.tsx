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

  if (currentModal) {
    return (
      <div
        onClick={() => closeModal()}
        className="flex-1 flex flex-col justify-center items-center"
      >
        {/* Modal container */}
        <div
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          className="z-50 fixed px-6 sm:px-0 w-full min-[444px]:w-auto flex justify-center"
        >
          {/* Modals */}
          {currentModal === "createBookmark" && <CreateBookmarkForm />}
          {currentModal === "deleteAccount" && <DeleteAccountConfirmation />}
          {currentModal === "deleteBookmark" && <DeleteBookmarkConfirmation />}
          {currentModal === "editBookmark" && <EditBookmarkForm />}
          {currentModal === "changePassword" && <ChangePasswordForm />}
        </div>

        {/* Overlay */}
        <div
          className="z-40 opacity-75 blur-[3px] pointer-events-none flex-1 flex flex-col"
          inert
        >
          {children}
        </div>
      </div>
    );
    // If no modals are open
  } else {
    return children;
  }
};

export default ModalHandler;
