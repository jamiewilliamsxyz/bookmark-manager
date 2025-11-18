import { use } from "react";
import { ModalContext } from "@/context/ModalContext";

export const useModal = () => {
  const context = use(ModalContext);
  if (!context) {
    throw new Error("useOverlay needs to be used in OverlayProvider");
  }
  return context;
};
