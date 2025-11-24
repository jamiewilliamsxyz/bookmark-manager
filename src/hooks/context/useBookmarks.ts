"use client";

import { use } from "react";
import { BookmarksContext } from "@/context/BookmarksContext";

export const useBookmarks = () => {
  const context = use(BookmarksContext);
  if (!context)
    throw new Error("useBookmarks needs to be used in BookmarksProvider");
  return context;
};
