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
      {logOutError && (
        <p role="alert" className="text-sm text-red-500">
          {logOutError}
        </p>
      )}
      <div className="flex gap-5 flex-col sm:flex-row w-full">
        <div className="bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-3 border border-neutral-800 items-center justify-center opacity-0 animate-[fadeInUp_0.3s_ease-out_forwards]">
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

        <div className="bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-3 border border-neutral-800 items-center justify-center opacity-0 animate-[fadeInUp_0.3s_ease-out_0.1s_forwards]">
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
