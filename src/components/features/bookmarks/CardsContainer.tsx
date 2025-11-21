"use client";

import { useBookmarks } from "@/hooks/useBookmarks";
import Card from "./Card";

const CardsContainer = () => {
  const { bookmarks, loading } = useBookmarks();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-wrap gap-5 w-1/2 items-center justify-center">
      {bookmarks.length > 0 ? (
        bookmarks.map((b) => (
          <Card
            key={b.id}
            id={b.id}
            title={b.title}
            url={b.url}
            tags={b.tags}
          />
        ))
      ) : (
        <p>You currently don&apos;t have any bookmarks</p>
      )}
    </div>
  );
};

export default CardsContainer;
