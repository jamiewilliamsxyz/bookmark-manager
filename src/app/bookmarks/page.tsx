import SearchArea from "@/components/features/bookmarks/SearchArea";
import AddBookmarkButton from "@/components/features/bookmarks/AddBookmarkButton";
import CardsContainer from "@/components/features/bookmarks/CardsContainer";

const BookmarksPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center px-8 gap-12">
      <h1 className="text-6xl">Bookmarks</h1>

      <div className="flex flex-col gap-5 items-center">
        <SearchArea />
        <AddBookmarkButton />
      </div>

      <CardsContainer />
    </div>
  );
};

export default BookmarksPage;
