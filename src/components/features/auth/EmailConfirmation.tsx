import type { ConfirmationType } from "@/types";

interface EmailConfirmationProps {
  confirmation: ConfirmationType;
  checkConfirmation: () => void;
}

const EmailConfirmation = ({
  confirmation,
  checkConfirmation,
}: EmailConfirmationProps) => {
  return (
    <>
      <p className="text-center">{confirmation.message}</p>
      <button
        onClick={checkConfirmation}
        className="shadow mt-0.75 bg-neutral-100 py-1.25 w-full rounded-md text-neutral-800 cursor-pointer hover:opacity-75 duration-200 transition-opacity"
      >
        I&apos;ve confirmed my email
      </button>
    </>
  );
};

export default EmailConfirmation;
