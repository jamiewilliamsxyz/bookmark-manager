import { use } from "react";
import { ModalContext } from "@/context/ModalContext";

export const useModal = () => {
  const context = use(ModalContext);
  if (!context) throw new Error("useModal needs to be used in ModalProvider");

  return context;
};
