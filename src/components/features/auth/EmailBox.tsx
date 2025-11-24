"use client";

import { ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/context/useAuth";

const EmailBox = () => {
  const { session } = useAuth();

  return (
    <div className="bg-[#1a1a1a] border border-neutral-800 shadow rounded-md p-5 flex gap-3 items-center justify-center select-none">
      <p>Logged in as</p>
      <ArrowRight color="#e5e5e5" strokeWidth={1.5} size={18} />
      <p className="text-neutral-400">{session?.user.email}</p>
    </div>
  );
};

export default EmailBox;
