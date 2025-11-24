"use client";

import { useState, createContext } from "react";
import { useBookmarks } from "@/hooks/context/useBookmarks";
import type { ModalContextType, ModalProps, ModalState } from "@/types";

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({ children }: ModalProps) => {
  const { setBookmarkToModify, setDeleteType } = useBookmarks();

  const [currentModal, setCurrentModal] = useState<ModalState>(null);

  const openModal = (modalType: ModalState) => {
    if (currentModal) return;
    setCurrentModal(modalType);
  };

  const closeModal = () => {
    setBookmarkToModify(null);
    setDeleteType(null);
    setCurrentModal(null);
  };

  return (
    <ModalContext value={{ currentModal, openModal, closeModal }}>
      {children}
    </ModalContext>
  );
};
