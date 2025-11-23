import { useActionState, useState } from "react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useModal } from "@/hooks/useModal";
import ReturnButton from "@/components/modal/ReturnButton";
import InputField from "./InputField";
import TagsField from "./TagsField";
import type { Bookmark, BookmarkOperationResult } from "@/types";

interface InputError {
  status: boolean;
  message: string;
}

const EditBookmarkForm = () => {
  const { bookmarkToModify, setBookmarkToModify, updateBookmark } =
    useBookmarks();
  const { closeModal } = useModal();

  const [title, setTitle] = useState(() => bookmarkToModify?.title || "");
  const [url, setUrl] = useState(() => bookmarkToModify?.url || "");
  const [tags, setTags] = useState(() => bookmarkToModify?.tags || []);
  const [tagsInput, setTagsInput] = useState<string>("");
  const [titleError, setTitleError] = useState<InputError>({
    status: false,
    message: "",
  });
  const [urlError, setUrlError] = useState<InputError>({
    status: false,
    message: "",
  });
  const [tagsError, setTagsError] = useState<InputError>({
    status: false,
    message: "",
  });

  const handleTitleInput = (value: string) => {
    setTitle(value);
    if (value.length > 50) {
      setTitleError({
        status: true,
        message: "Title must be 50 characters or less",
      });
      return;
    } else if (value.trim().length === 0) {
      setTitleError({ status: true, message: "Title is required" });
    } else {
      setTitleError({
        status: false,
        message: "",
      });
    }
  };

  const handleUrlInput = (value: string) => {
    setUrl(value);
    if (value.length > 300) {
      setUrlError({
        status: true,
        message: "URL must be 300 characters or less",
      });
    } else if (value.trim().length === 0) {
      setUrlError({ status: true, message: "URL is required" });
    } else if (!/^https?:\/\/\S+$/.test(value)) {
      setUrlError({
        status: true,
        message: "Enter a valid URL starting with http:// or https://",
      });
    } else {
      setUrlError({
        status: false,
        message: "",
      });
    }
  };

  const removeTag = (tag: string) => {
    const newTags = tags.filter((t) => t !== tag);
    if (newTags.length <= 5)
      setTagsError({
        status: false,
        message: "",
      });

    setTags(newTags);
  };

  const formatTagValue = (value: string) => {
    return value.trim().replace(",", "");
  };

  const handleTagsInput = (value: string) => {
    setTagsInput(value);

    // Check if max tags (5) has been reached
    if (tags.length >= 5) {
      setTagsError({
        status: true,
        message: "Limit reached: You can add up to 5 tags",
      });
      return;
      // Check if tag max character count (20) has been reached
    } else if (value.length > 20) {
      setTagsError({
        status: true,
        message: "Tags must be 20 characters or less",
      });
      return;
      // Check for duplicate tags
    } else if (tags.filter((t) => t === formatTagValue(value)).length >= 1) {
      setTagsError({
        status: true,
        message: "This tag already exists",
      });
      return;
    } else {
      setTagsError({
        status: false,
        message: "",
      });
    }

    // Adding the tag on comma
    if (value.includes(",")) {
      const newTag = formatTagValue(value);
      if (!newTag.length) return;
      setTagsInput("");
      setTags([...tags, newTag]);
    }
  };

  // Check if anything has changed or not
  const isUnchanged =
    bookmarkToModify &&
    title === bookmarkToModify.title &&
    url === bookmarkToModify.url &&
    JSON.stringify(tags) === JSON.stringify(bookmarkToModify.tags || []);

  const [state, formAction] = useActionState(
    // eslint-disable-next-line
    async (_prevState: any, formData: FormData) => {
      if (titleError.status || urlError.status || tagsError.status) return;

      if (isUnchanged)
        return { success: false, message: "No changes detected" };

      const formTitle = formData.get("title") as string;
      const formUrl = formData.get("url") as string;

      const newData = {
        title: formTitle,
        url: formUrl,
        tags,
      };

      const res: BookmarkOperationResult<Bookmark> = await updateBookmark(
        newData
      );

      if (!res.success) {
        console.error(res.error);
        return {
          success: false,
          message: res.error || "Something went wrong",
        };
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
      noValidate
      action={formAction}
      className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 justify-start min-w-110 max-w-110"
    >
      <InputField
        id="title"
        label="Title"
        placeholder="Enter title"
        type="text"
        value={title}
        error={titleError}
        onChange={(e) => handleTitleInput(e.target.value)}
      />
      <InputField
        id="url"
        label="URL"
        placeholder="Enter URL"
        type="text"
        value={url}
        error={urlError}
        onChange={(e) => handleUrlInput(e.target.value)}
      />
      <TagsField
        tags={tags}
        value={tagsInput}
        error={tagsError}
        onChange={(e) => handleTagsInput(e.target.value)}
        removeTag={removeTag}
      />

      {state?.success === false && (
        <p className="text-red-500 text-sm">{state.message}</p>
      )}

      <button
        type="submit"
        className={`${
          !!isUnchanged ||
          titleError.status ||
          urlError.status ||
          tagsError.status
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
