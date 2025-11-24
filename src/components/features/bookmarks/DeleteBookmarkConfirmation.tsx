import { useBookmarks } from "@/hooks/context/useBookmarks";
import { useModal } from "@/hooks/context/useModal";

const DeleteBookmarkConfirmation = () => {
  const { closeModal } = useModal();
  const { deleteBookmark, deleteAllBookmarks, deleteType } = useBookmarks();

  const handleConfirm = async () => {
    if (deleteType === "single") {
      await deleteBookmark();
    } else if (deleteType === "all") {
      await deleteAllBookmarks();
    }

    closeModal();
  };

  return (
    <div className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-md p-5 flex flex-col gap-5">
      <p className="text-lg">
        Are you sure you want to delete
        <br />
        {deleteType === "single" ? "this bookmark?" : "all bookmarks?"}
      </p>

      <div className="flex gap-5">
        <button
          onClick={() => closeModal()}
          className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
        >
          Cancel
        </button>

        <button
          onClick={() => handleConfirm()}
          className="text-red-500 underline cursor-pointer hover:opacity-75 duration-200 transition-opacity"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeleteBookmarkConfirmation;
