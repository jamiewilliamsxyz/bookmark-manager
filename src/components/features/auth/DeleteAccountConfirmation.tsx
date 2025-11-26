"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import { deleteUser } from "@/lib/deleteUser";
import CloseModalButton from "@/components/modal/CloseModalButton";

const DeleteAccountConfirmation = () => {
  const { logOutUser, session } = useAuth();

  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setError(null);

    // Get user id
    const userId = session?.user.id;
    if (!userId) {
      setError("User not found");
      return;
    }

    // Delete user and handle error
    const res = await deleteUser(userId);
    if (res) {
      setError(res);
      return;
    }

    // Logout
    await logOutUser();
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
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default DeleteAccountConfirmation;
