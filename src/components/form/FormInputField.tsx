interface FormInputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  error: { status: boolean; message: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputField = ({
  id,
  label,
  placeholder,
  type,
  value,
  error,
  onChange,
}: FormInputFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <p className="text-red-500 mt-0.5 text-sm">
        {error?.status && error.message}
      </p>
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        id={id}
        name={id}
        type={type}
        required
        aria-required="true"
        className="mt-1 py-2 px-3 bg-neutral-900 rounded-md border border-neutral-800 w-full focus:outline-none"
      />
    </div>
  );
};

export default FormInputField;
