export const MAX_BOOKMARKS = 30;

export const VALIDATION_RULES = {
  TITLE_MAX_LENGTH: 50,
  URL_MAX_LENGTH: 300,
  TAG_MAX_LENGTH: 20,
  MAX_TAGS: 5,
  URL_PATTERN: /^https?:\/\/\S+$/,
};

export const INITIAL_ERROR = { status: false, message: "" };
