import CardActions from "./CardActions";
import Tag from "./Tag";
import type { Bookmark } from "@/types";

type CardProps = Pick<Bookmark, "id" | "title" | "url" | "tags"> & {
  delay: number;
};

const Card = ({ id, title, url, tags, delay }: CardProps) => {
  return (
    <div
      className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-md p-5 sm:w-94 w-full h-fit flex flex-col gap-5 opacity-0 animate-[fadeInUp_0.3s_ease-out_forwards]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-between gap-5">
        <p title={title} className="text-lg truncate">
          {title}
        </p>
        <CardActions bookmarkData={{ id, title, url, tags }} />
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={url}
        aria-label={url}
        className="text-neutral-400 truncate"
      >
        {url}
      </a>

      <ul className="flex gap-3 flex-wrap">
        {tags?.map((t, index) => (
          <Tag key={index} text={t} variant="default" />
        ))}
      </ul>
    </div>
  );
};

export default Card;
