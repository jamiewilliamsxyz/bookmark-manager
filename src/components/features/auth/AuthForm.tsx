"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/context/useAuth";
import FormSubmitButton from "@/components/ui/FormSubmitButton";
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
    <>
      <h1 className="text-5xl text-center mb-12">
        {type === "login" ? "Log In" : "Sign Up"}
      </h1>

      <form
        action={authFormAction}
        className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 min-w-96 max-w-96"
      >
        {confirmation.isConfirming && type === "signup" ? (
          <>
            <p className="text-center">{confirmation.message}</p>
            <button
              onClick={checkConfirmation}
              className="shadow mt-0.75 bg-neutral-100 py-1.25 w-full rounded-md text-neutral-800 cursor-pointer hover:opacity-75 duration-200 transition-opacity"
            >
              I&apos;ve confirmed my email
            </button>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 py-2 px-3 bg-neutral-900 rounded-md border border-neutral-800 w-full focus:outline-none"
                required
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 py-2 px-3 bg-neutral-900 rounded-md border border-neutral-800 w-full focus:outline-none"
                aria-required="true"
                required
              />
            </div>

            {error && <p className="text-red-500">{error.message}</p>}

            <FormSubmitButton isDisabled={pending}>
              {pending ? "Loading..." : type === "login" ? "Log In" : "Sign Up"}
            </FormSubmitButton>

            <div className="flex items-center gap-1.5 text-[0.95rem] text-neutral-400">
              {type === "login" ? (
                <>
                  <p className="mt-0.5">Don&apos;t have an account?</p>
                  <Link
                    href="/signup"
                    className="underline text-neutral-300 hover:opacity-75 cursor-pointer duration-200 transition-opacity"
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  <p className="mt-0.5">Already have an account?</p>
                  <Link
                    href="/login"
                    className="underline text-neutral-300 hover:opacity-75 cursor-pointer duration-200 transition-opacity"
                  >
                    Log in
                  </Link>
                </>
              )}
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default AuthForm;
