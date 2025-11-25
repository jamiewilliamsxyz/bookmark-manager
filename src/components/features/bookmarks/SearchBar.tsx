"use client";

import { useRef } from "react";
import { useSearch } from "@/hooks/context-hooks/useSearch";
import { Search } from "lucide-react";

const SearchBar = () => {
  const { query, setQuery } = useSearch();
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
      className="shadow py-2 px-3 cursor-text bg-[#1a1a1a] rounded-md border border-neutral-800 gap-3 flex items-center"
    >
      <Search color="#f5f5f5" strokeWidth={1} size={20} />
      <input
        ref={inputRef}
        value={query}
        type="text"
        id="query"
        name="query"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        className="w-full focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
