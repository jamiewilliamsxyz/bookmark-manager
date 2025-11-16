"use client";

import { useState, useEffect, useRef } from "react";
import { Clipboard, SquarePen } from "lucide-react";

const Card = () => {
  const [isCooldown, setIsCooldown] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tempLink = "https://github.com/jamiewilliamsxyz";

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
    <div className="bg-neutral-800 p-5 w-120 rounded-lg shadow-lg flex flex-col gap-6.5">
      <div className="flex w-full gap-4 items-center justify-between">
        <p className="text-sky-200 font-medium text-lg">GitHub profile</p>
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
              <Clipboard color="#f5f5f5" strokeWidth={1.5} size={20} />
            )}
          </button>

          <button className="cursor-pointer hover:opacity-75 duration-200 transition-opacity">
            <SquarePen color="#f5f5f5" strokeWidth={1.5} size={20} />
          </button>
        </div>
      </div>

      <a
        href={tempLink}
        target="_blank"
        rel="noopener noreferrer"
        title={tempLink}
        aria-label={tempLink}
      >
        {tempLink}
      </a>

      <ul className="flex gap-3 mt-1 mb-0.5">
        <li className="bg-sky-200 rounded-lg shadow-lg text-sky-800 px-2 py-px select-none">
          Development
        </li>
        <li className="bg-sky-200 rounded-lg shadow-lg text-sky-800 px-2 py-px select-none">
          GitHub
        </li>
      </ul>
    </div>
  );
};

export default Card;
