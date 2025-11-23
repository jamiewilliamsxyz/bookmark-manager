export interface ModalProps {
  children: React.ReactNode;
}

export type ModalState =
  | "createBookmark"
  | "deleteAccount"
  | "deleteBookmark"
  | "editBookmark"
  | null;

export interface ModalContextType {
  currentModal: ModalState;

  openModal: (modalType: ModalState) => void;
  closeModal: () => void;
}
