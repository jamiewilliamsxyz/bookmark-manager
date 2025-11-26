export interface Bookmark {
  created_at: string;
  id: number;
  tags: string[] | null;
  title: string;
  url: string;
  user_id: string;
}

export type BookmarkToModify = Pick<Bookmark, "id" | "title" | "url"> & {
  tags: string[] | null;
};

export type CreateBookmarkData = Pick<Bookmark, "title" | "url"> & {
  tags?: string[];
};

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

export interface BookmarksContextType {
  bookmarks: Bookmark[];
  loading: boolean;
  bookmarkToModify: BookmarkToModify | null;
  deleteType: "single" | "all" | null;
  setBookmarkToModify: React.Dispatch<
    React.SetStateAction<BookmarkToModify | null>
  >;
  setDeleteType: React.Dispatch<React.SetStateAction<"single" | "all" | null>>;
  createBookmark: (
    data: CreateBookmarkData
  ) => Promise<BookmarkOperationResult<Bookmark>>;
  updateBookmark: (
    data: CreateBookmarkData
  ) => Promise<BookmarkOperationResult<Bookmark>>;
  deleteBookmark: () => Promise<BookmarkOperationResult<Bookmark>>;
  deleteAllBookmarks: () => Promise<BookmarkOperationResult<Bookmark[]>>;
}
