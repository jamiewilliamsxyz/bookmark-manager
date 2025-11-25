import { SearchProvider } from "@/context/SearchContext";
import SearchBar from "@/components/features/bookmarks/SearchBar";
import FilterSelect from "@/components/features/bookmarks/bookmark-filter/FilterSelect";
import CreateBookmarkButton from "@/components/features/bookmarks/CreateBookmarkButton";
import CardsContainer from "@/components/features/bookmarks/CardsContainer";

const BookmarksPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-start items-center gap-12 py-12 w-[820px] self-center">
      <h1 className="text-6xl">Bookmarks</h1>

      <SearchProvider>
        <div className="flex flex-col gap-5">
          <SearchBar />
          <div className="flex gap-5">
            <FilterSelect />
            <CreateBookmarkButton />
          </div>
        </div>

        <CardsContainer />
      </SearchProvider>
    </div>
  );
};

export default BookmarksPage;
