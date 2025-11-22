import CardActions from "./CardActions";
import Tag from "./Tag";
import type { Bookmark } from "@/types";

type CardProps = Pick<Bookmark, "id" | "title" | "url" | "tags">;

const Card = ({ id, title, url, tags }: CardProps) => {
  return (
    <div className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-md p-5 min-w-94 max-w-94 h-fit flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-lg leading-0">{title}</p>
        <CardActions id={id} url={url} />
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={url}
        aria-label={url}
        className="text-neutral-400 w-fit"
      >
        {url}
      </a>

      <ul className="flex gap-3 flex-wrap">
        {tags?.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>
    </div>
  );
};

export default Card;
