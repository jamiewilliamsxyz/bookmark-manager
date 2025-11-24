import { SearchProvider } from "@/context/SearchContext";
import SearchBar from "@/components/features/bookmarks/SearchBar";
import FilterSelect from "@/components/features/bookmarks/filter/FilterSelect";
import AddBookmarkButton from "@/components/features/bookmarks/AddBookmarkButton";
import CardsContainer from "@/components/features/bookmarks/CardsContainer";

const BookmarksPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-12 py-12 w-[820px] self-center">
      <h1 className="text-6xl">Bookmarks</h1>

      <SearchProvider>
        <div className="flex flex-col gap-5 items-center">
          <div className="flex gap-5 items-center">
            <SearchBar />
            <FilterSelect />
          </div>
          <AddBookmarkButton />
        </div>

        <CardsContainer />
      </SearchProvider>
    </div>
  );
};

export default BookmarksPage;
