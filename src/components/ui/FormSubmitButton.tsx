interface FormSubmitButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
}

const FormSubmitButton = ({ children, isDisabled }: FormSubmitButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type="submit"
      className={`${
        isDisabled
          ? "opacity-75 cursor-not-allowed"
          : "cursor-pointer hover:opacity-75 duration-200 transition-opacity"
      } mt-0.75 bg-neutral-100 py-1.25 w-full rounded-md text-lg text-neutral-800`}
    >
      {children}
    </button>
  );
};

export default FormSubmitButton;
