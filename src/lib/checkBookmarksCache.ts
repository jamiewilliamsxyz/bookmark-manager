import { CACHE_KEY } from "@/constants/bookmarks";

export const checkBookmarksCache = (userId?: string) => {
  const cached = localStorage.getItem(`${CACHE_KEY}_${userId}`);
  return cached ? JSON.parse(cached) : null;
};
