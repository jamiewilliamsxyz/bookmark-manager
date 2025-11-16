"use client";

import { useAuth } from "@/hooks/useAuth";
import DeleteAccountButton from "@/components/features/auth/DeleteAccountButton";

const AccountActions = () => {
  const { logOutUser, loading } = useAuth();
  const accountActions = [
    { name: "Log out", action: logOutUser },
    { name: "Reset password", action: () => {} },
    { name: "Change email", action: () => {} },
  ];

  return (
    <div className="bg-[#1a1a1a] rounded-xl shadow p-5 flex flex-col gap-5 border border-neutral-800 items-center justify-center">
      {accountActions.map((i) => (
        <button
          key={i.name}
          onClick={i.action}
          disabled={loading}
          className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
        >
          {i.name}
        </button>
      ))}
      <DeleteAccountButton />
    </div>
  );
};

export default AccountActions;
