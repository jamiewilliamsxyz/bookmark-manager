import ReturnButton from "@/components/modal/ReturnButton";
import InputField from "./InputField";
import TagsField from "./TagsField";

const BookmarkForm = () => {
  const tempError = { status: false, message: "Error message" };

  return (
    <form
      action={() => {}}
      className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 justify-start min-w-110 max-w-110"
    >
      <InputField id="title" label="Title" placeholder="Enter title" />
      <InputField id="url" label="URL" placeholder="Enter URL" />
      <TagsField />

      {tempError.status && <p className="text-red-500">{tempError.message}</p>}

      <button
        type="submit"
        className="mt-0.75 bg-neutral-100 py-1.25 w-full rounded-md text-lg text-neutral-800 cursor-pointer hover:opacity-75 duration-200 transition-opacity"
      >
        Create
      </button>

      <ReturnButton />
    </form>
  );
};

export default BookmarkForm;
