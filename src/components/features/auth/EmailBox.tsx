"use client";

import { useAuth } from "@/hooks/context-hooks/useAuth";

const EmailBox = () => {
  const { session } = useAuth();

  return (
    <div className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-md p-5 flex flex-col sm:flex-row gap-1.75 items-center justify-center w-full">
      <p className="flex">
        Logged in as<span className="hidden sm:block">:</span>
      </p>

      <p className="text-neutral-400">{session?.user.email}</p>
    </div>
  );
};

export default EmailBox;
