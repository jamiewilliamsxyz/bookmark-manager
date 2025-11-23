import { useState, useEffect, useRef } from "react";
import { Clipboard, SquarePen, Trash } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import { useBookmarks } from "@/hooks/useBookmarks";
import type { BookmarkToModify } from "@/types";

const CardActions = ({ bookmarkData }: { bookmarkData: BookmarkToModify }) => {
  const { openModal } = useModal();
  const { setBookmarkToModify, setDeleteType } = useBookmarks();

  const [isCooldown, setIsCooldown] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const copyLink = () => {
    if (isCooldown) return;

    setIsCooldown(true);
    navigator.clipboard.writeText(bookmarkData.url);

    timeoutRef.current = setTimeout(() => {
      setIsCooldown(false);
    }, 2400);
  };

  const handleEdit = (data: BookmarkToModify) => {
    setBookmarkToModify(data);
    openModal("editBookmark");
  };

  const handleDelete = (data: BookmarkToModify) => {
    setBookmarkToModify(data);
    setDeleteType("single");
    openModal("deleteBookmark");
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="flex gap-4">
      <button
        onClick={copyLink}
        disabled={isCooldown}
        className={
          isCooldown
            ? ""
            : "cursor-pointer hover:opacity-75 duration-200 transition-opacity"
        }
      >
        {isCooldown ? (
          <p className="text-sm">Copied!</p>
        ) : (
          <Clipboard color="#f5f5f5" strokeWidth={1} size={20} />
        )}
      </button>

      <button
        onClick={() => handleEdit(bookmarkData)}
        className="cursor-pointer hover:opacity-75 duration-200 transition-opacity"
      >
        <SquarePen color="#f5f5f5" strokeWidth={1} size={20} />
      </button>

      <button
        onClick={() => handleDelete(bookmarkData)}
        className="cursor-pointer hover:opacity-75 duration-200 transition-opacity"
      >
        <Trash color="#fb2c36" strokeWidth={1} size={20} />
      </button>
    </div>
  );
};

export default CardActions;
