import Link from "next/link";

interface FormInputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  error: { status: boolean; message: string };
  resetPasswordLink?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputField = ({
  id,
  label,
  placeholder,
  type,
  value,
  error,
  resetPasswordLink,
  onChange,
}: FormInputFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="text-lg">
        {label}
      </label>

      {resetPasswordLink && (
        <div className="mt-1 flex items-center gap-1.5 text-sm text-neutral-400">
          <p>Can&apos;t login?</p>
          <Link
            href="/reset-password"
            className="underline text-neutral-300 hover:opacity-75 cursor-pointer duration-200 transition-opacity"
          >
            Reset password
          </Link>
        </div>
      )}

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
