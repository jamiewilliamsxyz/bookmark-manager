"use client";

import { useState, createContext } from "react";
import { useBookmarks } from "@/hooks/useBookmarks";
import type { ModalContextType, ModalProps, ModalState } from "@/types";

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({ children }: ModalProps) => {
  const { bookmarkToDeleteId, setBookmarkToDeleteId } = useBookmarks();

  const [currentModal, setCurrentModal] = useState<ModalState>(null);

  const openModal = (modalType: ModalState) => {
    if (currentModal) return;
    setCurrentModal(modalType);
  };

  const closeModal = () => {
    if (bookmarkToDeleteId) setBookmarkToDeleteId(null);
    setCurrentModal(null);
  };

  return (
    <ModalContext value={{ currentModal, openModal, closeModal }}>
      {children}
    </ModalContext>
  );
};
