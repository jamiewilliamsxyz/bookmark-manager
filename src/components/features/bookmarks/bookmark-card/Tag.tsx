import { X } from "lucide-react";

interface TagProps {
  text: string;
  varient: "default" | "removable";
}

const Tag = ({ text, varient }: TagProps) => {
  return (
    <li
      className={`${
        varient === "removable"
          ? "pl-2.5 pr-2 flex items-center gap-1.5"
          : "px-2.5"
      } py-0.5 bg-neutral-200 h-fit w-fit text-sm rounded-md shadow-lg text-[#1a1a1a]`}
    >
      {text}
      {varient === "removable" && (
        <X strokeWidth={1.5} color="#1a1a1a" size={16} />
      )}
    </li>
  );
};

export default Tag;
