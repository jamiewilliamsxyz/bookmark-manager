import Card from "@/components/features/bookmarks/Card";

const BookmarksPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-start pt-14 items-center px-8 w-full gap-14">
      <h1 className="font-semibold text-6xl">Bookmarks</h1>

      <div className="flex flex-wrap gap-5 w-1/2 items-center justify-center">
        <Card />
      </div>
    </div>
  );
};

export default BookmarksPage;
