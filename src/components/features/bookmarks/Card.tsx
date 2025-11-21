"use client";

import { useState, useEffect, useRef } from "react";
import { Clipboard, SquarePen, Trash } from "lucide-react";
import Tag from "./Tag";
import type { Bookmark } from "@/types";

type CardProps = Pick<Bookmark, "id" | "title" | "url" | "tags">;

const Card = ({ id, title, url, tags }: CardProps) => {
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

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-md p-5 w-96 max-w-96 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-lg leading-0">{title}</p>
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

          <button className="cursor-pointer hover:opacity-75 duration-200 transition-opacity">
            <Trash color="#fb2c36" strokeWidth={1} size={20} />
          </button>
        </div>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={url}
        aria-label={url}
        className="text-neutral-400 w-fit"
      >
        {url}
      </a>

      <ul className="flex gap-3">
        {tags?.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>
    </div>
  );
};

export default Card;
