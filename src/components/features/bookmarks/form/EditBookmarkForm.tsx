import { useActionState } from "react";
import { useBookmarkForm } from "@/hooks/useBookmarkForm";
import { useBookmarks } from "@/hooks/context/useBookmarks";
import { useModal } from "@/hooks/context/useModal";
import CloseModalButton from "@/components/modal/CloseModalButton";
import InputField from "./InputField";
import TagsField from "./TagsField";
import { preventEnterSubmit } from "@/lib/preventEnterSubmit";
import type { Bookmark, BookmarkOperationResult } from "@/types";

const EditBookmarkForm = () => {
  const { bookmarkToModify, setBookmarkToModify, updateBookmark } =
    useBookmarks();
  const { closeModal } = useModal();
  const {
    title,
    url,
    tags,
    tagsInput,
    errors,
    isError,
    handleTitleChange,
    handleUrlChange,
    handleTagsInputChange,
    removeTag,
  } = useBookmarkForm({
    initialTitle: bookmarkToModify?.title || "",
    initialUrl: bookmarkToModify?.url || "",
    initialTags: bookmarkToModify?.tags || [],
  });

  // Check if anything has changed or not
  const isUnchanged =
    bookmarkToModify &&
    title === bookmarkToModify.title &&
    url === bookmarkToModify.url &&
    JSON.stringify(tags) === JSON.stringify(bookmarkToModify.tags || []);

  const [state, formAction] = useActionState(
    // eslint-disable-next-line
    async (_prevState: any, formData: FormData) => {
      if (isUnchanged)
        return { success: false, message: "No changes detected" };

      const formTitle = formData.get("title") as string;
      const formUrl = formData.get("url") as string;

      const res: BookmarkOperationResult<Bookmark> = await updateBookmark({
        title: formTitle,
        url: formUrl,
        tags,
      });

      if (!res.success) {
        console.error(res.error);
        return {
          success: false,
          message: res.error || "Something went wrong",
        };
      }

      setBookmarkToModify(null);
      closeModal();
      return { success: true };
    },
    null
  );

  const isSubmitDisabled =
    !!isUnchanged || isError() || !title.trim() || !url.trim();

  return (
    <form
      noValidate
      onKeyDown={preventEnterSubmit}
      action={formAction}
      className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 justify-start min-w-110 max-w-110"
    >
      <InputField
        id="title"
        label="Title"
        placeholder="Enter title"
        type="text"
        value={title}
        error={errors.title}
        onChange={(e) => handleTitleChange(e.target.value)}
      />

      <InputField
        id="url"
        label="URL"
        placeholder="Enter URL"
        type="text"
        value={url}
        error={errors.url}
        onChange={(e) => handleUrlChange(e.target.value)}
      />

      <TagsField
        tags={tags}
        value={tagsInput}
        error={errors.tags}
        onChange={(e) => handleTagsInputChange(e.target.value)}
        removeTag={removeTag}
      />

      {state?.success === false && (
        <p className="text-red-500 text-sm">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className={`${
          isSubmitDisabled
            ? "opacity-75 cursor-not-allowed"
            : "cursor-pointer hover:opacity-75 duration-200 transition-opacity"
        } mt-0.75 bg-neutral-100 py-1.25 w-full rounded-md text-lg text-neutral-800`}
      >
        Update
      </button>

      <CloseModalButton>Return</CloseModalButton>
    </form>
  );
};

export default EditBookmarkForm;
