import { useModal } from "@/hooks/useModal";

const ReturnButton = () => {
  const { closeModal } = useModal();

  return (
    <button
      onClick={() => closeModal()}
      className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
    >
      Return
    </button>
  );
};

export default ReturnButton;
