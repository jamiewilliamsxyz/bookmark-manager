import Tag from "../bookmark-card/Tag";

interface TagsFieldProps {
  tags: string[];
  value: string;
  error?: { status: boolean; message: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeTag: (tag: string) => void;
}

const TagsField = ({
  value,
  error,
  tags,
  onChange,
  removeTag,
}: TagsFieldProps) => {
  return (
    <div>
      <label htmlFor="tags" className="text-lg">
        Tags
      </label>

      <p
        className={`${
          error?.status ? "text-red-500" : "text-neutral-400"
        } mt-0.5 text-sm`}
      >
        {error?.status ? error.message : "Separate tags with commas"}
      </p>

      <input
        placeholder="useful, resource, hi :D"
        value={value}
        onChange={onChange}
        id="tags"
        name="tags"
        type="text"
        className="mt-1 py-2 px-3 bg-neutral-900 rounded-md border border-neutral-800 w-full focus:outline-none"
      />

      {tags.length > 0 && (
        <ul className="mt-2 flex gap-3 flex-wrap">
          {tags.map((t) => (
            <div
              className="cursor-pointer hover:opacity-75 duration-200 transition-opacity"
              key={t}
              onClick={() => removeTag(t)}
            >
              <Tag>{t}</Tag>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsField;
