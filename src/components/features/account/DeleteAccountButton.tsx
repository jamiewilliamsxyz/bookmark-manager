"use client";

import { useState } from "react";
import { supabase } from "@/api/supabaseClient";
import { useAuth } from "@/hooks/useAuth";
import { deleteUser } from "@/lib/deleteUser";

const DeleteAccountButton = () => {
  const [loading, setLoading] = useState(false);
  const { logOutUser } = useAuth();

  const handleDelete = async () => {
    const confirmed = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmed) return;

    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-400 underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
    >
      {loading ? "Deleting..." : "Delete Account"}
    </button>
  );
};

export default DeleteAccountButton;
