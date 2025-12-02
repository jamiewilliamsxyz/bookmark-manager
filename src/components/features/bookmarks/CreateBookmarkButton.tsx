"use client";

import { useBookmarks } from "@/hooks/context-hooks/useBookmarks";
import { useModal } from "@/hooks/context-hooks/useModal";
import { MAX_BOOKMARKS } from "@/constants/bookmarks";

const CreateBookmarkButton = () => {
  const { openModal } = useModal();
  const { bookmarks } = useBookmarks();

  const openCreateBookmarkForm = () => {
    if (bookmarks.length >= MAX_BOOKMARKS) return;
    openModal("createBookmark");
  };

  return (
    <button
      onClick={openCreateBookmarkForm}
      className="text-neutral-800 border border-neutral-900 bg-neutral-100 py-2 px-5.5 w-fit rounded-md shadow hover:opacity-75 cursor-pointer duration-200 transition-opacity"
    >
      <span className="hidden min-[421px]:inline">Create bookmark</span>
      <span className="inline min-[421px]:hidden">Create</span>
    </button>
  );
};

export default CreateBookmarkButton;
