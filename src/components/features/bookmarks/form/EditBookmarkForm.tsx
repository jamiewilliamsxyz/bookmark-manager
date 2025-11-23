"use client";

import { useActionState, useState } from "react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useModal } from "@/hooks/useModal";
import ReturnButton from "@/components/modal/ReturnButton";
import InputField from "./InputField";
import TagsField from "./TagsField";
import type { Bookmark, BookmarkOperationResult } from "@/types";

const EditBookmarkForm = () => {
  const { bookmarkToModify, setBookmarkToModify, updateBookmark } =
    useBookmarks();
  const { closeModal } = useModal();

  // Controlled input states for isUnchanged detection, initialised lazy
  const [title, setTitle] = useState(() => bookmarkToModify?.title || "");
  const [url, setUrl] = useState(() => bookmarkToModify?.url || "");
  const [tags, setTags] = useState(() => bookmarkToModify?.tags || []);

  // Check if anything has changed or not
  const isUnchanged =
    bookmarkToModify &&
    title === bookmarkToModify.title &&
    url === bookmarkToModify.url &&
    JSON.stringify(tags) === JSON.stringify(bookmarkToModify.tags || []);

  const [state, formAction] = useActionState(
    // eslint-disable-next-line
    async (_prevState: any, formData: FormData) => {
      const formTitle = formData.get("title") as string;
      const formUrl = formData.get("url") as string;

      // Need to add validation here

      const newData = {
        title: formTitle,
        url: formUrl,
        tags,
      };

      if (isUnchanged) {
        return { success: false, message: "No changes detected" };
      }

      const res: BookmarkOperationResult<Bookmark> = await updateBookmark(
        newData
      );

      if (!res.success) {
        console.error(res.error);
        return { success: false, message: res.error || "Something went wrong" };
      } else {
        setBookmarkToModify(null);
        closeModal();
        return { success: true };
      }
    },
    null
  );

  return (
    <form
      action={formAction}
      className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 justify-start min-w-110 max-w-110"
    >
      <InputField
        id="title"
        label="Title"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputField
        id="url"
        label="URL"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <TagsField tags={tags} setTags={setTags} />

      {state?.success === false && (
        <p className="text-red-500 text-sm">{state.message}</p>
      )}

      <button
        type="submit"
        className={`${
          !!isUnchanged
            ? "opacity-75"
            : "cursor-pointer hover:opacity-75 duration-200 transition-opacity"
        } mt-0.75 bg-neutral-100 py-1.25 w-full rounded-md text-lg text-neutral-800 `}
      >
        Update
      </button>

      <ReturnButton />
    </form>
  );
};

export default EditBookmarkForm;
