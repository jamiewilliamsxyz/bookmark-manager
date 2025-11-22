"use client";

import { useAuth } from "@/hooks/useAuth";
import { useModal } from "@/hooks/useModal";
import { useBookmarks } from "@/hooks/useBookmarks";
import DeleteAccountButton from "@/components/features/auth/DeleteAccountButton";

const AccountActions = () => {
  const { logOutUser, loading } = useAuth();
  const { openModal } = useModal();
  const { setDeleteType } = useBookmarks();

  const accountActions = [
    { name: "Log out", action: logOutUser },
    { name: "Reset password", action: () => {} },
    { name: "Change email", action: () => {} },
    {
      name: "Delete all bookmarks",
      action: () => {
        setDeleteType("all");
        openModal("deleteBookmark");
      },
    },
  ];

  return (
    <div className="bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 border border-neutral-800 items-center justify-center">
      {accountActions.map((i) => (
        <button
          key={i.name}
          onClick={i.action}
          disabled={loading}
          className={`${
            i.name === "Delete all bookmarks"
              ? "text-red-500"
              : "text-neutral-200"
          } underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit`}
        >
          {i.name}
        </button>
      ))}
      <DeleteAccountButton />
    </div>
  );
};

export default AccountActions;
