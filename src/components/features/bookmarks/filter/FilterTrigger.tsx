import { ChevronDown } from "lucide-react";

interface FilterTriggerProps {
  selected: "Title" | "Tag";
  onToggle: () => void;
}

const FilterTrigger = ({ selected, onToggle }: FilterTriggerProps) => {
  return (
    <div
      onClick={onToggle}
      className="text-neutral-400 shadow py-2 pr-3 pl-3.5 cursor-pointer bg-[#1a1a1a] rounded-md border border-neutral-800 gap-2.25 flex items-center"
    >
      <div className="flex items-center">
        <p className="mr-1.5">Search by</p>
        <p className="underline">{selected}</p>
      </div>

      <ChevronDown color="#f5f5f5" strokeWidth={1} size={20} />
    </div>
  );
};

export default FilterTrigger;
