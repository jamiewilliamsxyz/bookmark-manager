interface SpinnerProps {
  theme: "light" | "dark";
  size: "small" | "large";
}

const Spinner = ({ theme, size }: SpinnerProps) => {
  return (
    <div
      className={`${
        theme === "light" ? "border-neutral-200" : "border-neutral-800"
      } ${
        size === "small" ? "w-5.25 h-5.25" : "w-6.5 h-6.5"
      } border-2 border-t-transparent rounded-full animate-spin`}
    ></div>
  );
};

export default Spinner;
