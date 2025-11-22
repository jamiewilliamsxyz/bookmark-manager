export interface ModalProps {
  children: React.ReactNode;
}

export type ModalState =
  | "bookmarkForm"
  | "deleteAccount"
  | "deleteBookmark"
  | null;

export interface ModalContextType {
  currentModal: ModalState;

  openModal: (modalType: ModalState) => void;
  closeModal: () => void;
}
