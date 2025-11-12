"use client";

import { useAuth } from "@/hooks/useAuth";

const LogOutButton = () => {
  const { logOutUser, loading } = useAuth();
  return (
    <button
      onClick={logOutUser}
      disabled={loading}
      className="underline cursor-pointer hover:opacity-75 duration-200 transition-opacity w-fit h-fit"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
