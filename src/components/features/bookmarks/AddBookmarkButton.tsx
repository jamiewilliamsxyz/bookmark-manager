"use client";

import { useBookmarks } from "@/hooks/useBookmarks";
import { useModal } from "@/hooks/useModal";
import { MAX_BOOKMARKS } from "@/constants/bookmarks";

const AddBookmarkButton = () => {
  const { openModal } = useModal();
  const { bookmarks } = useBookmarks();

  const openBookmarkForm = () => {
    if (bookmarks.length >= MAX_BOOKMARKS) return;
    openModal("bookmarkForm");
  };

  return (
    <button
      onClick={openBookmarkForm}
      className="text-neutral-800 bg-neutral-100 py-2 px-5.5 w-fit rounded-md shadow hover:opacity-75 cursor-pointer duration-200 transition-opacity"
    >
      Add bookmark
    </button>
  );
};

export default AddBookmarkButton;
