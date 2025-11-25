import { useAuth } from "@/hooks/context-hooks/useAuth";
import { deleteUser } from "@/lib/deleteUser";
import CloseModalButton from "@/components/modal/CloseModalButton";

const DeleteAccountConfirmation = () => {
  const { logOutUser, session } = useAuth();

  const handleDelete = async () => {
    try {
      // Get user id
      const userId = session?.user?.id;
      if (!userId) {
        console.error("Session not found");
        return;
      }

      // Delete and logout user
      const deletedUser = await deleteUser(userId as string);
      if (deletedUser) {
        logOutUser();
      } else {
        console.error("Failed to delete user");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error deleting user:", err.message);
      } else {
        console.error("Unknown error deleting user:", err);
      }
    }
  };

  return (
    <div className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-md p-5 flex flex-col gap-5">
      <div>
        <p className="text-lg mb-2">
          Are you sure you want to delete <br />
          your account?
        </p>
        <p className="text-neutral-400">This action cannot be undone</p>
      </div>

      <div className="flex gap-5">
        <CloseModalButton>Cancel</CloseModalButton>
        <button
          onClick={() => handleDelete()}
          className="text-red-500 underline cursor-pointer hover:opacity-75 duration-200 transition-opacity"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountConfirmation;
