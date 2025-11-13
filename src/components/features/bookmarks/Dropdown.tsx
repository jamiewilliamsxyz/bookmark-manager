import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Add click outside to close

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<"title" | "tag">("title");

  return (
    <div className="h-10">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-[150px] justify-between cursor-pointer bg-neutral-200 rounded-lg shadow-lg py-2 px-2.5 flex items-center text-neutral-700"
      >
        <div className="flex items-center">
          <p className="mr-1 leading-0">Search by</p>
          <p>{selected}</p>
        </div>

        <ChevronDown
          color="#404040"
          strokeWidth={2}
          size={20}
          className="ml-0.5"
        />
      </div>

      <div
        className={`${
          isOpen ? "visible" : "invisible"
        } z-10 relative top-3 bg-neutral-200 text-neutral-700 shadow-lg flex flex-col gap-2 items-start rounded-lg px-2 py-2 w-[150px]`}
      >
        <p
          onClick={() => setSelected("title")}
          className={`${
            selected === "title"
              ? "bg-sky-200 text-sky-900 hover:bg-[#b0dcf3]"
              : "hover:bg-neutral-300"
          }  duration-200 transition-colors rounded-md cursor-pointer bg-neutral-200 px-1.5 py-1 w-full`}
        >
          Title
        </p>

        <p
          onClick={() => setSelected("tag")}
          className={`${
            selected === "tag"
              ? "bg-sky-200 text-sky-900 hover:bg-[#b0dcf3]"
              : "hover:bg-neutral-300"
          }  duration-200 transition-colors rounded-md cursor-pointer bg-neutral-200 px-1.5 py-1 w-full`}
        >
          Tag
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
