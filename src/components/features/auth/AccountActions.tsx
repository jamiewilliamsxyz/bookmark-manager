"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import { useModal } from "@/hooks/context-hooks/useModal";
import { useBookmarks } from "@/hooks/context-hooks/useBookmarks";
import DeleteAccountButton from "@/components/features/auth/DeleteAccountButton";

const AccountActions = () => {
  const { logOutUser, isLoading } = useAuth();
  const { openModal } = useModal();
  const { setDeleteType } = useBookmarks();

  const [logOutError, setLogOutError] = useState<string | null>(null);

  const handleLogOut = async () => {
    setLogOutError(null);

    const res = await logOutUser();
    if (res) setLogOutError(res);
  };

  return (
    <>
      {logOutError && <p className="text-sm text-red-500">{logOutError}</p>}
      <div className="flex gap-5">
        <div className="bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-3 border border-neutral-800 items-center justify-center">
          <button
            onClick={handleLogOut}
            disabled={isLoading}
            className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
          >
            Log out
          </button>
          <button
            onClick={() => openModal("changePassword")}
            disabled={isLoading}
            className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
          >
            Change password
          </button>
        </div>

        <div className="bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-3 border border-neutral-800 items-center justify-center">
          <DeleteAccountButton />
          <button
            disabled={isLoading}
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
    </>
  );
};

export default AccountActions;
