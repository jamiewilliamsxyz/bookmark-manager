import Tag from "../bookmark-card/Tag";

interface TagsFieldProps {
  tags: string[];
  value: string;
  error?: { status: boolean; message: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  removeTag: (tag: string) => void;
}

const TagsField = ({
  value,
  error,
  tags,
  onChange,
  onKeyDown,
  removeTag,
}: TagsFieldProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="tags" className="text-lg">
        Tags
      </label>

      <div className="my-0.5 text-sm">
        {error?.status ? (
          <p className="text-red-500">{error?.message}</p>
        ) : (
          <p className="text-neutral-400">
            Press
            <span className="bg-neutral-800 px-1.75 py-0.75 rounded-md mx-1.25 font-mono">
              Enter
            </span>
            or
            <span className="bg-neutral-800 px-1.75 py-0.75 rounded-md mx-1.25 font-mono">
              ,
            </span>
            to add a tag
          </p>
        )}
      </div>

      <input
        placeholder="useful, resource, 123"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
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
