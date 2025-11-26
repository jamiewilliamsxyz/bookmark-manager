import { useActionState } from "react";
import { useBookmarkForm } from "@/hooks/form-hooks/useBookmarkForm";
import { useBookmarks } from "@/hooks/context-hooks/useBookmarks";
import { useModal } from "@/hooks/context-hooks/useModal";
import CloseModalButton from "@/components/modal/CloseModalButton";
import FormInputField from "@/components/form/FormInputField";
import TagsField from "./TagsField";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import { preventEnterSubmit } from "@/lib/preventEnterSubmit";
import type { Bookmark, BookmarkOperationResult } from "@/types";

const CreateBookmarkForm = () => {
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
    handleTagsInputKeyDown,
    removeTag,
  } = useBookmarkForm();
  const { createBookmark } = useBookmarks();
  const { closeModal } = useModal();

  const [state, formAction, pending] = useActionState(
    // eslint-disable-next-line
    async (_prevState: any, formData: FormData) => {
      const formTitle = formData.get("title") as string;
      const formUrl = formData.get("url") as string;

      const res: BookmarkOperationResult<Bookmark> = await createBookmark({
        title: formTitle,
        url: formUrl,
        tags,
      });

      if (!res.success) {
        return { success: false, message: res.error || "Something went wrong" };
      }

      closeModal();
      return { success: true };
    },
    null
  );

  const isSubmitDisabled = isError() || !title.trim() || !url.trim() || pending;

  return (
    <form
      noValidate
      onKeyDown={preventEnterSubmit}
      action={formAction}
      className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 justify-start min-w-110 max-w-110"
    >
      <FormInputField
        id="title"
        label="Title"
        placeholder="Useful Resource Name"
        type="text"
        value={title}
        error={errors.title}
        onChange={(e) => handleTitleChange(e.target.value)}
      />

      <FormInputField
        id="url"
        label="URL"
        placeholder="https://example.com"
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
        onKeyDown={(e) => handleTagsInputKeyDown(e.key, tagsInput)}
        removeTag={removeTag}
      />

      {state?.success === false && (
        <p className="text-red-500 text-sm">{state.message}</p>
      )}

      <FormSubmitButton
        isDisabled={isSubmitDisabled}
        isLoading={pending}
        text="Create"
      />

      <CloseModalButton>Return</CloseModalButton>
    </form>
  );
};

export default CreateBookmarkForm;
