import { useModal } from "@/hooks/context-hooks/useModal";

const CloseModalButton = ({ children }: { children: string }) => {
  const { closeModal } = useModal();

  return (
    <button
      type="button"
      onClick={() => closeModal()}
      className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
    >
      {children}
    </button>
  );
};

export default CloseModalButton;
