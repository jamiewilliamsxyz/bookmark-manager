import { Bookmark } from "lucide-react";
import SearchArea from "@/components/features/bookmarks/SearchArea";
import Card from "@/components/features/bookmarks/Card";
import AddBookmarkButton from "@/components/features/bookmarks/AddBookmarkButton";

const BookmarksPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-start pt-14 items-center px-8 w-full gap-14">
      <div className="flex items-center gap-3">
        <Bookmark size={56} color="#7dd3fc" strokeWidth={2.5} />
        <h1 className="font-semibold text-6xl text-neutral-100">Bookmarks</h1>
      </div>

      <div className="flex flex-col w-full items-center gap-6">
        <SearchArea />

        <AddBookmarkButton />
      </div>

      <div className="flex flex-wrap gap-5 w-2/3 items-center justify-center mb-14">
        <Card />
      </div>
    </div>
  );
};

export default BookmarksPage;
