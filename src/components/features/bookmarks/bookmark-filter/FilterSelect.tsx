"use client";

import { useState, useRef, useEffect } from "react";
import { useSearch } from "@/hooks/context-hooks/useSearch";
import FilterTrigger from "./FilterTrigger";
import FilterDropdown from "./FilterDropdown";

const FilterSelect = () => {
  const { selectedFilter, setSelectedFilter } = useSearch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        selected={selectedFilter}
        onToggle={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
      />
      <FilterDropdown
        isOpen={isOpen}
        selected={selectedFilter}
        onSelect={(option) => setSelectedFilter(option)}
      />
    </div>
  );
};

export default FilterSelect;
