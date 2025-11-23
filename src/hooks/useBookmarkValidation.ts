// Bookmark form validation logic

import { useState } from "react";
import { VALIDATION_RULES, INITIAL_ERROR } from "@/constants/bookmarks";

export const useBookmarkValidation = () => {
  const {
    TITLE_MAX_LENGTH,
    URL_MAX_LENGTH,
    TAG_MAX_LENGTH,
    MAX_TAGS,
    URL_PATTERN,
  } = VALIDATION_RULES;

  const [errors, setErrors] = useState({
    title: INITIAL_ERROR,
    url: INITIAL_ERROR,
    tags: INITIAL_ERROR,
  });

  const resetTagError = () => {
    setErrors((prev) => ({ ...prev, tags: INITIAL_ERROR }));
  };

  const validateTitle = (value: string) => {
    if (value.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        title: {
          status: true,
          message: "Title is required",
        },
      }));
      return false;
    }

    if (value.length > TITLE_MAX_LENGTH) {
      setErrors((prev) => ({
        ...prev,
        title: {
          status: true,
          message: `Title must be ${TITLE_MAX_LENGTH} or less`,
        },
      }));
      return false;
    }

    setErrors((prev) => ({
      ...prev,
      title: INITIAL_ERROR,
    }));
    return true;
  };

  const validateUrl = (value: string) => {
    if (value.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        url: {
          status: true,
          message: "URL is required",
        },
      }));
      return false;
    }

    if (value.length > URL_MAX_LENGTH) {
      setErrors((prev) => ({
        ...prev,
        url: {
          status: true,
          message: `URL must be ${URL_MAX_LENGTH} or less`,
        },
      }));
      return false;
    }

    if (!URL_PATTERN.test(value)) {
      setErrors((prev) => ({
        ...prev,
        url: {
          status: true,
          message: "Enter a valid URL starting with http:// or https://",
        },
      }));
      return false;
    }

    setErrors((prev) => ({
      ...prev,
      url: INITIAL_ERROR,
    }));
    return true;
  };

  const validateTagInput = (value: string, currentTags: string[]) => {
    if (currentTags.length >= MAX_TAGS) {
      setErrors((prev) => ({
        ...prev,
        tags: {
          status: true,
          message: `Limit reached: You can add up to ${MAX_TAGS} tags`,
        },
      }));
      return false;
    }

    if (value.length > TAG_MAX_LENGTH) {
      setErrors((prev) => ({
        ...prev,
        tags: {
          status: true,
          message: `Tags must be ${TAG_MAX_LENGTH} characters or less`,
        },
      }));
      return false;
    }

    resetTagError();
    return true;
  };

  const isError = () => {
    return errors.title.status || errors.url.status || errors.tags.status;
  };

  return {
    errors,
    isError,
    resetTagError,
    validateTitle,
    validateUrl,
    validateTagInput,
  };
};
