import { CACHE_KEY } from "@/constants/bookmarks";

export const checkBookmarksCache = () => {
  const cached = localStorage.getItem(CACHE_KEY);
  return cached ? JSON.parse(cached) : null;
};
