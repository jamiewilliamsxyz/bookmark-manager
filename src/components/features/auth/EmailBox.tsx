"use client";

import { useAuth } from "@/hooks/context/useAuth";

const EmailBox = () => {
  const { session } = useAuth();

  return (
    <div className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-md p-5 flex gap-1.75 items-center justify-center select-none w-full">
      <p>Logged in as:</p>

      <p className="text-neutral-400">{session?.user.email}</p>
    </div>
  );
};

export default EmailBox;
