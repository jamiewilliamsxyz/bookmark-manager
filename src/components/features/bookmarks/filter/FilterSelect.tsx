"use client";

import { useState, useRef, useEffect } from "react";
import FilterTrigger from "./FilterTrigger";
import FilterDropdown from "./FilterDropdown";

const FilterSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<"Title" | "Tag">("Title");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <FilterTrigger
        selected={selected}
        onToggle={() => setIsOpen((prev) => !prev)}
      />
      <FilterDropdown
        isOpen={isOpen}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
};

export default FilterSelect;
