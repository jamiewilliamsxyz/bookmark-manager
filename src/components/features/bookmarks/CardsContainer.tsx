"use client";

import { useBookmarks } from "@/hooks/context-hooks/useBookmarks";
import { useSearch } from "@/hooks/context-hooks/useSearch";
import { MAX_BOOKMARKS } from "@/constants/bookmarks";
import Card from "./bookmark-card/Card";
import Spinner from "@/components/ui/Spinner";

const CardsContainer = () => {
  const { bookmarks, bookmarksStatus } = useBookmarks();
  const { query, selectedFilter } = useSearch();

  // Bookmarks to render based on query and filter
  const filteredBookmarks = bookmarks.filter((b) => {
    // Include bookmark in filteredBookmarks if query is empty
    if (!query.trim()) return true;

    if (selectedFilter === "Title") {
      return b.title.toLowerCase().includes(query.trim().toLowerCase());
    } else if (selectedFilter === "Tag") {
      return b.tags?.some((t) =>
        t.toLowerCase().includes(query.trim().toLowerCase())
      );
    }

    return true;
  });

  if (bookmarksStatus.isLoading) return <Spinner theme="light" size="large" />;
  if (bookmarksStatus.isLoading)
    return <p className="text-red-500">{bookmarksStatus.error}</p>;

  return (
    <>
      {bookmarks.length >= MAX_BOOKMARKS && (
        <p className="text-red-500">{`Maximum of ${MAX_BOOKMARKS} bookmarks reached`}</p>
      )}

      <div className="cards-container-scrollbar flex flex-wrap gap-5 items-base justify-center overflow-y-auto overflow-x-hidden max-h-[53vh]">
        {filteredBookmarks.length > 0 ? (
          filteredBookmarks.map((b) => (
            <Card
              key={b.id}
              id={b.id}
              title={b.title}
              url={b.url}
              tags={b.tags}
            />
          ))
        ) : (
          <p>
            {bookmarks.length > 0
              ? "No bookmarks match your search"
              : "You currently don't have any bookmarks"}
          </p>
        )}
      </div>
    </>
  );
};

export default CardsContainer;
