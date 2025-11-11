"use client";

import { useActionState } from "react";
import { useAuth } from "@/hooks/useAuth";
import type { AuthFormProps } from "@/types";

const AuthForm = ({ type }: AuthFormProps) => {
  const { logInUser } = useAuth();

  const [error, authFormAction, pending] = useActionState(
    async (_prevState: Error | null, formData: FormData) => {
      const email = formData.get("email");
      const password = formData.get("password");

      const res = await logInUser(email as string, password as string);

      // Handle known errors
      if (!res.success) {
        return new Error(res.error);
      }

      // Handle if success/there's a session
      if (res.data.session && res.success) {
        return null;
      }

      return new Error("Error while logging in");
    },
    null
  );

  return (
    <form
      action={authFormAction}
      className="flex flex-col gap-5 w-full max-w-sm px-5 py-8 bg-neutral-100 shadow-lg rounded-lg text-neutral-700"
    >
      <h1 className="text-neutral-800 text-4xl font-semibold text-center leading-none">
        {type === "login" ? "Log In" : "Sign Up"}
      </h1>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="border p-2 rounded-lg w-full mt-2"
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          className="border p-2 rounded-lg w-full mt-2"
          aria-required="true"
          required
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-3.5 cursor-pointer p-2 font-medium text-lg w-full rounded-lg shadow-lg bg-neutral-800 text-neutral-100 hover:opacity-75 duration-200 transition-opacity"
      >
        {pending ? "Loading..." : type === "login" ? "Log In" : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm;
