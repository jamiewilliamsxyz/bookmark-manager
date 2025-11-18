import { useModal } from "@/hooks/useModal";

const DeleteAccountButton = () => {
  const { openModal } = useModal();

  return (
    <button
      onClick={() => openModal("deleteAccount")}
      className="text-red-500 underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
    >
      Delete Account
    </button>
  );
};

export default DeleteAccountButton;
