import { ChevronDown } from "lucide-react";
import type { FilterOption } from "@/types";

interface FilterTriggerProps {
  selected: FilterOption;
  onToggle: () => void;
  isOpen: boolean;
}

const FilterTrigger = ({ selected, onToggle, isOpen }: FilterTriggerProps) => {
  return (
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="text-neutral-500 shadow py-2 pr-3 pl-3.5 cursor-pointer bg-[#1a1a1a] rounded-md border border-neutral-800 flex items-center justify-between w-44"
    >
      <span className="flex items-center">
        <span className="mr-1.5">Search by:</span>
        <span className="text-neutral-200">{selected}</span>
      </span>

      <ChevronDown color="#f5f5f5" strokeWidth={1} size={20} />
    </button>
  );
};

export default FilterTrigger;
