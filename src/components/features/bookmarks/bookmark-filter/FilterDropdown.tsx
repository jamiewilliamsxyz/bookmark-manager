import { Check } from "lucide-react";

interface FilterDropdownProps {
  isOpen: boolean;
  selected: "Title" | "Tag";
  onSelect: (selected: "Title" | "Tag") => void;
}

const FilterDropdown = ({
  isOpen,
  selected,
  onSelect,
}: FilterDropdownProps) => {
  if (!isOpen) return null;

  return (
    <div className="text-sm shadow bg-[#1a1a1a] rounded-md border border-neutral-800 absolute right-0 mt-2 w-22 transition-all duration-200 z-30">
      <button
        onClick={() => onSelect("Title")}
        aria-pressed={selected === "Title"}
        className={`${
          selected === "Title" ? "text-neutral-200" : "text-neutral-400"
        } px-3.5 pt-3 pb-1.5 cursor-pointer hover:opacity-75 transition-opacity duration-200 flex gap-3`}
      >
        <span>Title</span>
        {selected === "Title" && (
          <Check strokeWidth={1.1} color="#ffffff" size={17} />
        )}
      </button>

      <button
        onClick={() => onSelect("Tag")}
        aria-pressed={selected === "Title"}
        className={`${
          selected === "Tag" ? "text-neutral-200" : "text-neutral-400"
        } px-3.5 pb-3 pt-1.5 cursor-pointer hover:opacity-75 transition-opacity duration-200 flex gap-3`}
      >
        <span>Tag</span>
        {selected === "Tag" && (
          <Check strokeWidth={1.1} color="#ffffff" size={17} />
        )}
      </button>
    </div>
  );
};

export default FilterDropdown;
