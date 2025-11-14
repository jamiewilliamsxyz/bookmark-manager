import { Plus } from "lucide-react";

const AddBookmarkButton = () => {
  return (
    <button className="h-10 flex items-center justify-center gap-2 bg-sky-200 text-sky-800 rounded-lg shadow-lg py-2 w-120 cursor-pointer hover:opacity-75 duration-200 transition-opacity">
      <Plus size={22} strokeWidth={2} />
      <p>Add Bookmark</p>
    </button>
  );
};

export default AddBookmarkButton;
