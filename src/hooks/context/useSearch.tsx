import { use } from "react";
import { SearchContext } from "@/context/SearchContext";

export const useSearch = () => {
  const context = use(SearchContext);
  if (!context) throw new Error("useSearch needs to be used in SearchProvider");

  return context;
};
