import Spinner from "@/components/ui/Spinner";

interface FormSubmitButtonProps {
  text: string;
  isDisabled: boolean;
  isLoading: boolean;
}

const FormSubmitButton = ({
  text,
  isDisabled,
  isLoading,
}: FormSubmitButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type="submit"
      className={`${
        isDisabled
          ? "opacity-75 cursor-not-allowed"
          : "cursor-pointer hover:opacity-75 duration-200 transition-opacity"
      } mt-0.75 bg-neutral-100 h-9.5 w-full rounded-md text-lg text-neutral-800 flex items-center justify-center`}
    >
      {isLoading ? <Spinner theme="dark" size="small" /> : text}
    </button>
  );
};

export default FormSubmitButton;
