// Bookmark form state management

import { useState } from "react";
import { useBookmarkValidation } from "./useBookmarkValidation";
import { formatTagValue } from "@/lib/formatTagValue";

interface UseBookmarkFormProps {
  initialTitle?: string;
  initialUrl?: string;
  initialTags?: string[];
}

export const useBookmarkForm = ({
  initialTitle = "",
  initialUrl = "",
  initialTags = [],
}: UseBookmarkFormProps = {}) => {
  const [title, setTitle] = useState(initialTitle);
  const [url, setUrl] = useState(initialUrl);
  const [tags, setTags] = useState<string[]>(initialTags);
  const [tagsInput, setTagsInput] = useState<string>("");

  const {
    errors,
    validateTitle,
    validateUrl,
    validateTagInput,
    resetTagError,
    isError,
  } = useBookmarkValidation();

  const handleTitleChange = (value: string) => {
    setTitle(value);
    validateTitle(value);
  };

  const handleUrlChange = (value: string) => {
    setUrl(value);
    validateUrl(value);
  };

  const handleTagsInputChange = (value: string) => {
    setTagsInput(value);
    validateTagInput(value, tags);

    // Add tag on comma
    if (value.includes(",")) {
      const newTag = formatTagValue(value);
      if (newTag.length && !errors.tags.status) {
        setTagsInput("");
        setTags((prev) => [...prev, newTag]);
        resetTagError();
      }
    }
  };

  // Add tag on enter key down
  const handleTagsInputKeyDown = (event: string, value: string) => {
    if (event !== "Enter") return;
    validateTagInput(value, tags);

    const newTag = value.trim();
    if (newTag.length && !errors.tags.status) {
      setTagsInput("");
      setTags((prev) => [...prev, newTag]);
      resetTagError();
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags((prev) => prev.filter((_, index) => index !== indexToRemove));
    resetTagError();
  };

  return {
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
  };
};
