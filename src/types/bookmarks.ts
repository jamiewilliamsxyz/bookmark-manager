export interface Bookmark {
  created_at: string;
  id: number;
  tags: string[] | null;
  title: string;
  url: string;
  user_id: string;
}

export interface CreateBookmarkData {
  title: string;
  url: string;
  tags?: string[];
}

export interface BookmarkOperationSuccess<T> {
  success: true;
  data: T;
}

export interface BookmarkOperationError {
  success: false;
  error: string;
}

export type BookmarkOperationResult<T> =
  | BookmarkOperationSuccess<T>
  | BookmarkOperationError;

export interface BookmarksContextValue {
  bookmarks: Bookmark[];
  loading: boolean;
  bookmarkToDeleteId: number | null;
  deleteType: "single" | "all" | null;
  setBookmarkToDeleteId: React.Dispatch<React.SetStateAction<number | null>>;
  setDeleteType: React.Dispatch<React.SetStateAction<"single" | "all" | null>>;
  createBookmark: (
    data: CreateBookmarkData
  ) => Promise<BookmarkOperationResult<Bookmark>>;
  updateBookmark: () => void;
  deleteBookmark: () => Promise<BookmarkOperationResult<Bookmark>>;
  deleteAllBookmarks: () => Promise<BookmarkOperationResult<Bookmark[]>>;
}
