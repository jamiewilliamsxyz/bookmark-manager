import { ChevronDown } from "lucide-react";
import type { FilterOption } from "@/types";

interface FilterTriggerProps {
  selected: FilterOption;
  onToggle: () => void;
}

const FilterTrigger = ({ selected, onToggle }: FilterTriggerProps) => {
  return (
    <div
      onClick={onToggle}
      className="text-neutral-400 shadow py-2 pr-3 pl-3.5 cursor-pointer bg-[#1a1a1a] rounded-md border border-neutral-800 flex items-center justify-between w-43"
    >
      <div className="flex items-center">
        <p className="mr-1.5">Search by</p>
        <p className="text-neutral-200">{selected}</p>
      </div>

      <ChevronDown color="#f5f5f5" strokeWidth={1} size={20} />
    </div>
  );
};

export default FilterTrigger;
