"use client";

import { useState, createContext, useEffect } from "react";
import { supabase } from "@/api/supabaseClient";
import { useAuth } from "@/hooks/useAuth";

import type {
  Bookmark,
  BookmarkToModify,
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
  const [bookmarkToModify, setBookmarkToModify] =
    useState<BookmarkToModify | null>(null);
  const [deleteType, setDeleteType] = useState<"single" | "all" | null>(null);

  // Fetch bookmarks
  useEffect(() => {
    const fetchBookmarks = async (): Promise<void> => {
      try {
        const { data, error } = await supabase
          .from("bookmarks")
          .select("*")
          .order("created_at", { ascending: false });

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

      if (error) return { success: false, error: error.message };

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
  const updateBookmark = async (
    data: CreateBookmarkData
  ): Promise<BookmarkOperationResult<Bookmark>> => {
    try {
      if (!bookmarkToModify)
        return { success: false, error: "No bookmark found" };

      const { data: res, error } = await supabase
        .from("bookmarks")
        .update(data)
        .eq("id", bookmarkToModify.id)
        .select("*")
        .single();

      if (error) return { success: false, error: error.message };

      const bookmark = res as Bookmark;
      setBookmarks(
        (prev) => prev.map((b) => (b.id === bookmarkToModify.id ? bookmark : b)) // Return all bookmarks, replacing the one that matches the updated bookmark's id
      );
      setBookmarkToModify(null);
      return { success: true, data: bookmark }; // Return the updated bookmark
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unexpected error occurred";
      return { success: false, error: message };
    }
  };

  // Delete bookmark
  const deleteBookmark = async (): Promise<
    BookmarkOperationResult<Bookmark>
  > => {
    try {
      if (!bookmarkToModify)
        return { success: false, error: "No bookmark found" };

      const { data, error } = await supabase
        .from("bookmarks")
        .delete()
        .eq("id", bookmarkToModify.id)
        .select("*")
        .single();

      if (error) return { success: false, error: error.message };

      const bookmark = data as Bookmark;
      setBookmarks((prev) => prev.filter((b) => b.id !== bookmarkToModify.id));
      setBookmarkToModify(null);
      return { success: true, data: bookmark };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unexpected error occurred";
      return { success: false, error: message };
    }
  };

  // Delete all bookmarks
  const deleteAllBookmarks = async (): Promise<
    BookmarkOperationResult<Bookmark[]>
  > => {
    try {
      const userId = session?.user?.id;
      if (!userId) return { success: false, error: "Session not found" };

      const { data, error } = await supabase
        .from("bookmarks")
        .delete()
        .eq("user_id", userId)
        .select("*");

      if (error) return { success: false, error: error.message };

      const deleted = data as Bookmark[];
      setBookmarks([]);
      return { success: true, data: deleted };
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
        bookmarkToModify,
        deleteType,
        setBookmarkToModify,
        setDeleteType,
        createBookmark,
        updateBookmark,
        deleteBookmark,
        deleteAllBookmarks,
      }}
    >
      {children}
    </BookmarksContext>
  );
};
