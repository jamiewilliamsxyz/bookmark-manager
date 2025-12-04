import Link from "next/link";

const EmailConfirmation = () => {
  return (
    <div className="text-center flex flex-col items-center gap-2.5">
      <p className="text-lg">A confirmation email has been sent</p>
      <p className="text-neutral-500">
        Please check your inbox and then log in
      </p>
      <Link
        href="/login"
        className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
      >
        Login
      </Link>
    </div>
  );
};

export default EmailConfirmation;
