interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const InputField = ({ id, label, placeholder }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <input
        placeholder={placeholder}
        id={id}
        name={id}
        type="text"
        required
        aria-required="true"
        className="mt-1 py-2 px-3 bg-neutral-900 rounded-md border border-neutral-800 w-full focus:outline-none"
      />
    </div>
  );
};

export default InputField;
