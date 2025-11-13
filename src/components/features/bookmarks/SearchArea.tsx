"use client";

import { useRef } from "react";
import { Search } from "lucide-react";
import Dropdown from "./Dropdown";

const SearchArea = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    } else {
      console.error("Element is not mounted");
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <div
        onClick={() => focusInput()}
        className="cursor-text bg-neutral-800 w-[238px] rounded-lg shadow-lg py-2 px-2.5 gap-2 flex items-center h-10"
      >
        <Search color="#f5f5f5" strokeWidth={1.5} size={20} />
        <input
          ref={inputRef}
          type="text"
          id="query"
          name="query"
          placeholder="Search"
          className="w-full focus:outline-none"
        />
      </div>

      <Dropdown />
    </div>
  );
};

export default SearchArea;
