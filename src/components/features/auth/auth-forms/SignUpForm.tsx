"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import EmailConfirmation from "../EmailConfirmation";
import FormSubmitButton from "@/components/form/FormSubmitButton";

const SignUpForm = () => {
  const { signUpUser, checkConfirmation, confirmation } = useAuth();

  const [error, formAction, pending] = useActionState(
    async (_prevState: Error | null, formData: FormData) => {
      const email = formData.get("email");
      const password = formData.get("password");

      const res = await signUpUser(email as string, password as string);

      // Handle known errors
      if (!res.success) {
        return new Error(res.error);
      }

      // Handle if success/there's a session
      if (res.data.session && res.success) {
        return null;
      }

      return new Error("Error while signing up");
    },
    null
  );

  return (
    <>
      <h1 className="text-5xl text-center mb-12">Sign Up</h1>

      <form
        action={formAction}
        className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 min-w-96 max-w-96"
      >
        {confirmation.isConfirming ? (
          <EmailConfirmation
            confirmation={confirmation}
            checkConfirmation={checkConfirmation}
          />
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

            <FormSubmitButton
              isDisabled={pending}
              isLoading={pending}
              text="Sign Up"
            />

            <div className="flex items-center gap-1.5 text-[0.95rem] text-neutral-400">
              <p className="mt-0.5">Already have an account?</p>
              <Link
                href="/login"
                className="underline text-neutral-300 hover:opacity-75 cursor-pointer duration-200 transition-opacity"
              >
                Log in
              </Link>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default SignUpForm;
