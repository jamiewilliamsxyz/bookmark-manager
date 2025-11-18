"use client";

import { useState, createContext } from "react";

import type { ModalContextType, ModalProps, ModalState } from "@/types";

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({ children }: ModalProps) => {
  const [currentModal, setCurrentModal] = useState<ModalState>(null);

  const openModal = (modalType: ModalState) => {
    if (currentModal) return;
    setCurrentModal(modalType);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  return (
    <ModalContext value={{ currentModal, openModal, closeModal }}>
      {children}
    </ModalContext>
  );
};
