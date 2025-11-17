"use client";

import { useRef } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    } else {
      console.error("Element is not mounted");
    }
  };

  return (
    <div
      onClick={() => focusInput()}
      className="shadow py-2 px-3 cursor-text bg-[#1a1a1a] rounded-xl border border-neutral-800 gap-3 flex items-center"
    >
      <Search color="#f5f5f5" strokeWidth={1} size={20} />
      <input
        ref={inputRef}
        type="text"
        id="query"
        name="query"
        placeholder="Search"
        className="w-full focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
