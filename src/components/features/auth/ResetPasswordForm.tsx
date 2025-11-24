"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/context/useAuth";

const ResetPasswordForm = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState<string>("");

  return (
    <form className="bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 border border-neutral-800 justify-center">
      <div>
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <p className="text-red-500 mt-0.5 text-sm">Email validation error</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="example@gmail.com"
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          className="mt-1 py-2 px-3 bg-neutral-900 rounded-md border border-neutral-800 w-full focus:outline-none"
        />
      </div>

      <p className="text-red-500 text-sm">Form error message</p>
      <button className="cursor-pointer hover:opacity-75 duration-200 transition-opacity mt-0.75 bg-neutral-100 py-1.25 w-full rounded-md text-lg text-neutral-800">
        Send
      </button>
      <p className="text-neutral-400 text-sm">
        You&apos;ll receive an email to reset your password
      </p>
    </form>
  );
};

export default ResetPasswordForm;
