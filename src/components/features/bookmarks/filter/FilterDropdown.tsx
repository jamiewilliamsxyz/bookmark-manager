interface FilterDropdownProps {
  isOpen: boolean;
  selected: "title" | "tag";
  onSelect: (selected: "title" | "tag") => void;
}

const FilterDropdown = ({
  isOpen,
  selected,
  onSelect,
}: FilterDropdownProps) => {
  return (
    <div
      className={`absolute right-0 mt-2 w-[135px] bg-neutral-100 text-neutral-800 shadow flex flex-col gap-2 items-start rounded-xl p-2 transition-all duration-200 ${
        isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
      }`}
    >
      <p
        onClick={() => onSelect("title")}
        className={`w-full px-1.5 py-0.75 rounded-lg cursor-pointer transition-colors duration-200 
          ${
            selected === "title"
              ? "bg-neutral-400 text-neutral-900 hover:bg-[#b3b3b3]"
              : "hover:bg-neutral-300"
          }`}
      >
        Title
      </p>

      <p
        onClick={() => onSelect("tag")}
        className={`w-full px-1.5 py-0.75 rounded-lg cursor-pointer transition-colors duration-200 
          ${
            selected === "tag"
              ? "bg-neutral-400 text-neutral-900 hover:bg-[#b3b3b3]"
              : "hover:bg-neutral-300"
          }`}
      >
        Tag
      </p>
    </div>
  );
};

export default FilterDropdown;
