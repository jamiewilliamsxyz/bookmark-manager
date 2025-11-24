"use client";

import { useAuth } from "@/hooks/context/useAuth";
import { useModal } from "@/hooks/context/useModal";
import { useBookmarks } from "@/hooks/context/useBookmarks";
import DeleteAccountButton from "@/components/features/auth/DeleteAccountButton";

const AccountActions = () => {
  const { logOutUser, loading } = useAuth();
  const { openModal } = useModal();
  const { setDeleteType } = useBookmarks();

  return (
    <div className="flex gap-5">
      <div className="bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-3 border border-neutral-800 items-center justify-center">
        <button
          onClick={logOutUser}
          disabled={loading}
          className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
        >
          Log out
        </button>
        <button
          onClick={() => {}}
          disabled={loading}
          className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
        >
          Reset password
        </button>
      </div>

      <div className="bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-3 border border-neutral-800 items-center justify-center">
        <DeleteAccountButton />
        <button
          disabled={loading}
          onClick={() => {
            setDeleteType("all");
            openModal("deleteBookmark");
          }}
          className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit text-red-500"
        >
          Delete all bookmarks
        </button>
      </div>
    </div>
  );
};

export default AccountActions;
