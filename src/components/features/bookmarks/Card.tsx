"use client";

import { useState, useEffect, useRef } from "react";
import { Clipboard, SquareArrowOutUpRight, SquarePen } from "lucide-react";
import ExternalLink from "@/components/ui/ExternalLink";

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
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="bg-neutral-800 px-5 py-5 w-120 rounded-lg shadow-lg flex flex-col gap-6">
      <div className="flex w-full gap-3 items-center justify-between">
        <p className="text-sky-200 font-medium text-lg leading-0">
          GitHub profile
        </p>
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={tempLink}
            title={tempLink}
            aria-label={tempLink}
            className="cursor-pointer hover:opacity-75 duration-200 transition-opacity"
          >
            <SquareArrowOutUpRight
              color="#f5f5f5"
              strokeWidth={1.5}
              size={20}
            />
          </a>
          <button className="cursor-pointer hover:opacity-75 duration-200 transition-opacity">
            <SquarePen color="#f5f5f5" strokeWidth={1.5} size={20} />
          </button>
        </div>
      </div>

      <ExternalLink text={tempLink} url={tempLink} />

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
