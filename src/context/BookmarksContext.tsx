"use client";

import { useState, createContext, useEffect } from "react";
import { supabase } from "@/api/supabaseClient";
import { useAuth } from "@/hooks/useAuth";

import type {
  Bookmark,
  CreateBookmarkData,
  BookmarksContextValue,
  BookmarkOperationResult,
} from "@/types";

export const BookmarksContext = createContext<
  BookmarksContextValue | undefined
>(undefined);

export const BookmarksProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { session } = useAuth();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch bookmarks
  useEffect(() => {
    const fetchBookmarks = async (): Promise<void> => {
      try {
        const { data, error } = await supabase.from("bookmarks").select("*");

        if (error) {
          console.error("Error fetching bookmarks:", error);
          return;
        }

        if (data) setBookmarks(data as Bookmark[]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  // Create bookmark
  const createBookmark = async (
    data: CreateBookmarkData
  ): Promise<BookmarkOperationResult<Bookmark>> => {
    try {
      // Get user id
      const userId = session?.user?.id;
      if (!userId) return { success: false, error: "Session not found" };

      // Create new bookmark object

      const newBookmark = {
        ...data,
        user_id: userId,
      };

      // Insert new bookmark
      const { data: res, error } = await supabase
        .from("bookmarks")
        .insert(newBookmark)
        .select("*")
        .single();

      if (error) {
        return { success: false, error: error.message };
      }

      // Handle success
      const bookmark = res as Bookmark; // Telling TS that the shape of the data is Bookmarks
      setBookmarks((prev) => [...prev, bookmark]);
      return { success: true, data: bookmark };

      // Handle unexpected errors
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unexpected error occurred";
      return { success: false, error: message };
    }
  };

  // Update bookmark
  const updateBookmark = (): void => {};

  // Delete bookmark
  const deleteBookmark = async (
    id: number
  ): Promise<BookmarkOperationResult<Bookmark>> => {
    try {
      const { data, error } = await supabase
        .from("bookmarks")
        .delete()
        .eq("id", id)
        .select("*")
        .single();

      if (error) {
        return { success: false, error: error.message };
      }

      const bookmark = data as Bookmark;
      setBookmarks((prev) => prev.filter((b) => b.id !== id));
      return { success: true, data: bookmark };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unexpected error occurred";
      return { success: false, error: message };
    }
  };

  return (
    <BookmarksContext
      value={{
        bookmarks,
        loading,
        createBookmark,
        updateBookmark,
        deleteBookmark,
      }}
    >
      {children}
    </BookmarksContext>
  );
};
