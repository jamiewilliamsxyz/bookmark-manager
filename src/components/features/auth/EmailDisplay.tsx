"use client";

import { useAuth } from "@/hooks/context/useAuth";

const EmailDisplay = () => {
  const { session } = useAuth();

  return (
    <div className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-md text-neutral-400 px-5 py-3 flex flex-col gap-1.5 items-center justify-center">
      <p className="text-neutral-200">Logged in as:</p>
      <p>{session?.user.email}</p>
    </div>
  );
};

export default EmailDisplay;
