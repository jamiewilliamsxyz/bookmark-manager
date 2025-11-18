"use client";

import { useEffect } from "react";
import { useModal } from "@/hooks/useModal";
import BookmarkForm from "@/components/features/bookmarks/BookmarkForm";
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
        <div onClick={(e) => e.stopPropagation()} className="z-50 fixed">
          {/* Modals */}
          {currentModal === "bookmarkForm" && <BookmarkForm />}
        </div>

        {/* Overlay */}
        <div className="z-40 opacity-75 blur-[3px] pointer-events-none flex-1 flex flex-col">
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
