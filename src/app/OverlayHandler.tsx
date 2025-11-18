"use client";

import type { ModalProps } from "@/types";
import { useModal } from "@/hooks/useModal";
import Overlay from "@/components/modal/Overlay";
import BookmarkForm from "@/components/features/bookmarks/BookmarkForm";
import ModalContainer from "@/components/modal/ModalContainer";

const OverlayHandler = ({ children }: ModalProps) => {
  const { currentModal } = useModal();

  if (currentModal === "bookmarkForm") {
    return (
      <>
        <ModalContainer>
          <BookmarkForm />
        </ModalContainer>

        <Overlay>{children}</Overlay>
      </>
    );
  } else {
    return children;
  }
};

export default OverlayHandler;
