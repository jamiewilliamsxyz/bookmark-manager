"use client";

import { useState, useEffect, useRef } from "react";
import { Clipboard, SquarePen, Trash } from "lucide-react";
import Tag from "./Tag";

const Card = () => {
  const [isCooldown, setIsCooldown] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tempLink = "https://github.com/jamiewilliamsxyz";
  const tempBadges = ["Development", "GitHub"];

  const copyLink = () => {
    if (isCooldown) return;
    setIsCooldown(true);
    navigator.clipboard.writeText(tempLink);

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
    <div className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-xl p-5 w-96 max-w-96 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-lg leading-0">GitHub profile</p>
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
              <Clipboard color="#e5e5e5" strokeWidth={1} size={20} />
            )}
          </button>

          <button className="cursor-pointer hover:opacity-75 duration-200 transition-opacity">
            <SquarePen color="#e5e5e5" strokeWidth={1} size={20} />
          </button>

          <button className="cursor-pointer hover:opacity-75 duration-200 transition-opacity">
            <Trash color="#fb2c36" strokeWidth={1} size={20} />
          </button>
        </div>
      </div>

      <a
        href={tempLink}
        target="_blank"
        rel="noopener noreferrer"
        title={tempLink}
        aria-label={tempLink}
        className="text-neutral-400 w-fit"
      >
        {tempLink}
      </a>

      <ul className="flex gap-3">
        {tempBadges.map((i) => (
          <Tag key={i}>{i}</Tag>
        ))}
      </ul>
    </div>
  );
};

export default Card;
