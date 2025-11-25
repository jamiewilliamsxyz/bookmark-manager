interface SpinnerProps {
  variant: "light" | "dark";
}

const Spinner = ({ variant }: SpinnerProps) => {
  return (
    <div
      className={`${
        variant === "light" ? "border-neutral-200" : "border-neutral-800"
      } w-6 h-6 border-2 border-t-transparent rounded-full animate-spin`}
    ></div>
  );
};

export default Spinner;
