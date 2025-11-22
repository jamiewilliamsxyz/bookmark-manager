import { useState, useEffect, useRef } from "react";
import { Clipboard, SquarePen, Trash } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import { useBookmarks } from "@/hooks/useBookmarks";
import type { Bookmark } from "@/types";

type CardActionsProps = Pick<Bookmark, "id" | "url">;

const CardActions = ({ id, url }: CardActionsProps) => {
  const { openModal } = useModal();
  const { setBookmarkToDeleteId, setDeleteType } = useBookmarks();

  const [isCooldown, setIsCooldown] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const copyLink = () => {
    if (isCooldown) return;

    setIsCooldown(true);
    navigator.clipboard.writeText(url);

    timeoutRef.current = setTimeout(() => {
      setIsCooldown(false);
    }, 2400);
  };

  const handleDelete = (id: number) => {
    setBookmarkToDeleteId(id);
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

      <button className="cursor-pointer hover:opacity-75 duration-200 transition-opacity">
        <SquarePen color="#f5f5f5" strokeWidth={1} size={20} />
      </button>

      <button
        onClick={() => handleDelete(id)}
        className="cursor-pointer hover:opacity-75 duration-200 transition-opacity"
      >
        <Trash color="#fb2c36" strokeWidth={1} size={20} />
      </button>
    </div>
  );
};

export default CardActions;
