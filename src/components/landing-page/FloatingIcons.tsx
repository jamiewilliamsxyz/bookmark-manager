import { Bookmark, Link2, Tag } from "lucide-react";

const FloatingIcons = () => {
  return (
    <div
      aria-hidden="true"
      className="hidden min-[850px]:block z-50 opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]"
    >
      <div className="absolute top-[45%] left-[calc(50%-420px)] rotate-12">
        <Bookmark className="w-12 h-12 text-neutral-100 opacity-65 animate-[float_5s_ease-in-out_infinite]" />
      </div>

      <div className="absolute top-1/2 right-[calc(50%-410px)] -rotate-6">
        <Tag className="w-10 h-10 text-neutral-100 opacity-60 animate-[float_6s_ease-in-out_infinite]" />
      </div>

      <div className="absolute top-2/3 left-[calc(50%-400px)] rotate-[-20deg]">
        <Link2 className="w-8 h-8 text-neutral-100 opacity-50 animate-[float_5.5s_ease-in-out_infinite]" />
      </div>

      <div className="absolute top-[70%] right-[calc(50%-410px)] -rotate-18">
        <Bookmark className="w-10 h-10 text-neutral-100 opacity-55 animate-[float_6.5s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};

export default FloatingIcons;
