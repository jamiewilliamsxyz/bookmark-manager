import { useBookmarks } from "@/hooks/context-hooks/useBookmarks";
import { useModal } from "@/hooks/context-hooks/useModal";
import CloseModalButton from "@/components/modal/CloseModalButton";

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
      <div>
        <p className="text-lg mb-2">
          Are you sure you want to delete
          <br />
          {deleteType === "single" ? "this bookmark?" : "all bookmarks?"}
        </p>
        <p className="text-neutral-400">This action cannot be undone</p>
      </div>

      <div className="flex gap-5">
        <CloseModalButton>Cancel</CloseModalButton>

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
