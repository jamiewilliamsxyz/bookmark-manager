"use client";

import { useActionState, useState } from "react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useModal } from "@/hooks/useModal";
import ReturnButton from "@/components/modal/ReturnButton";
import InputField from "./InputField";
import TagsField from "./TagsField";
import type { Bookmark, BookmarkOperationResult } from "@/types";

const CreateBookmarkForm = () => {
  const { createBookmark } = useBookmarks();
  const { closeModal } = useModal();

  const [tags, setTags] = useState<string[]>([]);

  const [state, formAction] = useActionState(
    // eslint-disable-next-line
    async (_prevState: any, formData: FormData) => {
      const title = formData.get("title") as string;
      const url = formData.get("url") as string;

      // Need to add validation here

      const res: BookmarkOperationResult<Bookmark> = await createBookmark({
        title,
        url,
        tags,
      });

      if (!res.success) {
        console.error(res.error);
        return { success: false, message: res.error || "Something went wrong" };
      } else {
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
      <InputField id="title" label="Title" placeholder="Enter title" />
      <InputField id="url" label="URL" placeholder="Enter URL" />
      <TagsField tags={tags} setTags={setTags} />

      {state?.success === false && (
        <p className="text-red-500 text-sm">{state.message}</p>
      )}

      <button
        type="submit"
        className="mt-0.75 bg-neutral-100 py-1.25 w-full rounded-md text-lg text-neutral-800 cursor-pointer hover:opacity-75 duration-200 transition-opacity"
      >
        Create
      </button>

      <ReturnButton />
    </form>
  );
};

export default CreateBookmarkForm;
