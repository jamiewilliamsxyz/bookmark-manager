"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import EmailField from "@/components/form/EmailField";
import PasswordField from "@/components/form/PasswordField";
import FormSubmitButton from "@/components/form/FormSubmitButton";

const LogInForm = () => {
  const { logInUser } = useAuth();

  const [error, formAction, pending] = useActionState(
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
    <>
      <h1 className="text-5xl text-center mb-12">Log In</h1>

      <form
        action={formAction}
        className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 min-w-96 max-w-96"
      >
        <EmailField />
        <PasswordField />

        {error && <p className="text-red-500">{error.message}</p>}

        <FormSubmitButton
          isDisabled={pending}
          isLoading={pending}
          text="Log In"
        />

        <div className="flex items-center gap-1.5 text-[0.95rem] text-neutral-400">
          <p className="mt-0.5">Don&apos;t have an account?</p>
          <Link
            href="/signup"
            className="underline text-neutral-300 hover:opacity-75 cursor-pointer duration-200 transition-opacity"
          >
            Sign up
          </Link>
        </div>
      </form>
    </>
  );
};

export default LogInForm;
