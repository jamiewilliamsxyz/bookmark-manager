import CardActions from "./CardActions";
import Tag from "./Tag";
import type { Bookmark } from "@/types";

type CardProps = Pick<Bookmark, "id" | "title" | "url" | "tags">;

const Card = ({ id, title, url, tags }: CardProps) => {
  return (
    <div className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-md p-5 min-w-94 max-w-94 h-fit flex flex-col gap-5">
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
