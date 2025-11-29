import { X } from "lucide-react";

interface TagProps {
  text: string;
  variant: "default" | "removable";
  onRemove?: () => void;
}

const Tag = ({ text, variant, onRemove }: TagProps) => {
  if (variant === "removable" && onRemove) {
    return (
      <li className="bg-red-600">
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${text} tag`}
          className="pl-2.5 pr-2 flex items-center gap-1.5 py-0.5 bg-neutral-200 h-fit w-fit text-sm rounded-md shadow-lg text-[#1a1a1a] cursor-pointer hover:opacity-75 duration-200 transition-opacity"
        >
          {text}
          <X strokeWidth={1.5} color="#1a1a1a" size={16} />
        </button>
      </li>
    );
  }

  return (
    <li className="px-2.5 py-0.5 bg-neutral-200 h-fit w-fit text-sm rounded-md shadow-lg text-[#1a1a1a]">
      {text}
    </li>
  );
};

export default Tag;
