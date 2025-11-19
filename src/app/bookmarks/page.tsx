import SearchArea from "@/components/features/bookmarks/SearchArea";
import Card from "@/components/features/bookmarks/Card";
import AddBookmarkButton from "@/components/features/bookmarks/AddBookmarkButton";

const BookmarksPage = () => {
  const tempCards = [
    {
      id: 1,
      title: "GitHub profile",
      url: "https://github.com/jamiewilliamsxyz",
      tags: ["Development", "GitHub"],
    },
  ];

  return (
    <div className="flex flex-1 flex-col justify-center items-center px-8 gap-12">
      <h1 className="text-6xl">Bookmarks</h1>

      <div className="flex flex-col gap-5 items-center">
        <SearchArea />
        <AddBookmarkButton />
      </div>

      <div className="flex flex-wrap gap-5 w-1/2 items-center justify-center">
        {tempCards.map((c) => (
          <Card
            key={c.id}
            id={c.id}
            title={c.title}
            url={c.url}
            tags={c.tags}
          />
        ))}

        {tempCards.length <= 0 && (
          <p>You currently don&apos;t have any bookmarks</p>
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;
