import { supabase } from "@/api/supabaseClient";
import { useAuth } from "@/hooks/context/useAuth";
import { deleteUser } from "@/lib/deleteUser";
import ReturnButton from "@/components/modal/ReturnButton";

const DeleteAccountConfirmation = () => {
  const { logOutUser } = useAuth();

  const handleDelete = async () => {
    // Fetch user
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Supabase error while fetching user:", error.message);
        return;
      }
      if (!user) {
        console.error("User not found");
        return;
      }

      // Delete and logout user
      const deletedUser = await deleteUser(user.id);
      if (deletedUser) {
        logOutUser();
      } else {
        console.error("Failed to delete user");
      }
    } catch (err: unknown) {
      if (err instanceof Error)
        console.error("Error deleting user:", err.message);
      else console.error("Unknown error deleting user:", err);
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
        <ReturnButton />
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
