"use client";

import { useAuth } from "@/hooks/useAuth";

const LogOutButton = () => {
  const { logOutUser, loading } = useAuth();
  return (
    <button onClick={logOutUser} disabled={loading}>
      Log Out
    </button>
  );
};

export default LogOutButton;
