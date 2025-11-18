"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import type { AuthFormProps, AuthResult } from "@/types";

const AuthForm = ({ type }: AuthFormProps) => {
  const { logInUser, signUpUser, confirmation, checkConfirmation } = useAuth();

  const [error, authFormAction, pending] = useActionState(
    async (_prevState: Error | null, formData: FormData) => {
      const email = formData.get("email");
      const password = formData.get("password");

      let res: AuthResult;

      switch (type) {
        case "login":
          res = await logInUser(email as string, password as string);
          break;
        case "signup":
          res = await signUpUser(email as string, password as string);
          break;
        default:
          return new Error("Unknown auth type:", type);
      }

      // Handle known errors
      if (!res.success) {
        return new Error(res.error);
      }

      // Handle if success/there's a session
      if (res.data.session && res.success) {
        return null;
      }

      return new Error(
        `Error while ${type === "login" ? "logging" : "signing"} in`
      );
    },
    null
  );

  return (
    <form
      action={authFormAction}
      className="flex flex-col gap-6 w-full max-w-sm px-5 py-6 bg-neutral-100 shadow-lg rounded-2xl text-neutral-700"
    >
      <h1 className="text-neutral-800 text-4xl font-semibold text-center">
        {type === "login" ? "Log In" : "Sign Up"}
      </h1>

      {confirmation.isConfirming && type === "signup" ? (
        <>
          <p className="text-center text-[1.05rem] text-neutral-600">
            {confirmation.message}
          </p>
          <button
            onClick={checkConfirmation}
            className="mt-1.5 cursor-pointer p-2 font-medium text-lg w-full rounded-lg shadow-lg bg-neutral-800 text-neutral-100 hover:opacity-75 duration-200 transition-opacity"
          >
            I&apos;ve confirmed my email
          </button>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border p-2 rounded-lg w-full mt-1.5"
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
              className="border p-2 rounded-lg w-full mt-1.5"
              aria-required="true"
              required
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="mt-2.5 cursor-pointer p-2 font-medium text-lg w-full rounded-lg shadow-lg bg-neutral-800 text-neutral-100 hover:opacity-75 duration-200 transition-opacity"
          >
            {pending ? "Loading..." : type === "login" ? "Log In" : "Sign Up"}
          </button>

          <div className="flex gap-1.5 text-[0.95rem] text-neutral-600">
            {type === "login" ? (
              <>
                <p>Don&apos;t have an account?</p>
                <Link
                  href="/signup"
                  className="underline shadow text-neutral-800 hover:opacity-75 cursor-pointer duration-200 transition-opacity"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <p>Already have an account?</p>
                <Link
                  href="/login"
                  className="underline shadow text-neutral-800 hover:opacity-75 cursor-pointer duration-200 transition-opacity"
                >
                  Log in
                </Link>
              </>
            )}
          </div>
        </>
      )}
    </form>
  );
};

export default AuthForm;
