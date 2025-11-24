import { useState, createContext } from "react";

import type { FilterOption } from "@/types";

export interface SearchContextType {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedFilter: FilterOption;
  setSelectedFilter: React.Dispatch<React.SetStateAction<FilterOption>>;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("Title");

  return (
    <SearchContext
      value={{ query, selectedFilter, setQuery, setSelectedFilter }}
    >
      {children}
    </SearchContext>
  );
};
