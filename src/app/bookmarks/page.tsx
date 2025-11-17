import SearchArea from "@/components/features/bookmarks/SearchArea";
import Card from "@/components/features/bookmarks/Card";
import AddBookmarkButton from "@/components/features/bookmarks/AddBookmarkButton";

const BookmarksPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center px-8 gap-12">
      <h1 className="text-6xl">Bookmarks</h1>

      <div className="flex flex-col gap-5 items-center">
        <SearchArea />
        <AddBookmarkButton />
      </div>

      <div className="flex flex-wrap gap-5 w-1/2 items-center justify-center">
        <Card />
      </div>
    </div>
  );
};

export default BookmarksPage;
