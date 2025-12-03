export const MAX_BOOKMARKS = 30;

export const VALIDATION_RULES = {
  TITLE_MAX_LENGTH: 50,
  URL_MAX_LENGTH: 300,
  TAG_MAX_LENGTH: 20,
  MAX_TAGS: 5,
  URL_PATTERN: /^https?:\/\/\S+$/,
  EMAIL_MAX_LENGTH: 300,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 72,
};

export const INITIAL_ERROR = { status: false, message: "" };

export const CACHE_KEY = "bookmarks_cache";
