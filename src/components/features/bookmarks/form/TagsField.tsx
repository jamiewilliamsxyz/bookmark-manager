import { useState } from "react";
import Tag from "../Tag";

interface TagsErrorState {
  status: boolean;
  message: string;
}

const TagsField = () => {
  const [tagsInput, setTagsInput] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagsError, setTagsError] = useState<TagsErrorState>({
    status: false,
    message: "",
  });

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const formatTagValue = (value: string) => {
    return value.trim().replace(",", "");
  };

  const handleTagsInput = (value: string) => {
    setTagsInput(value);

    // Check if max tags length has been reached
    if (tags.length >= 5) {
      setTagsError({
        status: true,
        message: "Limit reached: You can add up to 5 tags",
      });
      return;
      // Check if tag max character count has been reached
    } else if (value.length > 21) {
      setTagsError({
        status: true,
        message: "Tags must be 20 characters or less",
      });
      return;
      // Check for duplicate tags
    } else if (tags.filter((t) => t === formatTagValue(value)).length >= 1) {
      setTagsError({
        status: true,
        message: "This tag already exists",
      });
      return;
    } else {
      setTagsError({
        status: false,
        message: "",
      });
    }

    if (value.includes(",")) {
      const newValue = formatTagValue(value);
      if (!newValue.length) return;
      setTagsInput("");
      setTags((prev) => [...prev, newValue]);
    }
  };

  return (
    <div>
      <label htmlFor="tags" className="text-lg">
        Tags
      </label>

      <p
        className={`${
          tagsError.status ? "text-red-500" : "text-neutral-400"
        } mt-0.5 text-sm`}
      >
        {tagsError.status ? tagsError.message : "Separate tags with commas"}
      </p>
      <input
        placeholder="Enter tags"
        value={tagsInput}
        onChange={(e) => handleTagsInput(e.target.value)}
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
