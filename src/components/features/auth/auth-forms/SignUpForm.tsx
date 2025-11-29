"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import { useAuthFormValidation } from "@/hooks/form-hooks/useAuthFormValidation";
import EmailConfirmation from "../EmailConfirmation";
import FormInputField from "@/components/form/FormInputField";
import FormSubmitButton from "@/components/form/FormSubmitButton";

const SignUpForm = () => {
  const { signUpUser, checkConfirmation, confirmation } = useAuth();
  const {
    email,
    password,
    errors,
    handleEmailChange,
    handlePasswordChange,
    isError,
  } = useAuthFormValidation();

  const [state, formAction, pending] = useActionState(
    // eslint-disable-next-line
    async (_prevState: any | null, formData: FormData) => {
      const formEmail = formData.get("email");
      const formPassword = formData.get("password");

      const res = await signUpUser(formEmail as string, formPassword as string);

      // Handle known errors
      if (!res.success) {
        return { success: false, message: res.error || "Something went wrong" };
      }

      // Handle if success/there's a session
      if (res.data.session && res.success) {
        return { success: true };
      }

      return { success: false, message: "Error while signing up" };
    },
    null
  );

  const isSubmitDisabled =
    isError() || !email.trim() || !password.trim() || pending;

  return (
    <form
      noValidate
      action={formAction}
      className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 justify-start min-w-96 max-w-96"
    >
      {confirmation.isConfirming ? (
        <EmailConfirmation
          confirmation={confirmation}
          checkConfirmation={checkConfirmation}
        />
      ) : (
        <>
          <FormInputField
            id="email"
            label="Email"
            placeholder="example@gmail.com"
            type="email"
            value={email}
            error={errors.email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />

          <FormInputField
            id="password"
            label="Password"
            placeholder="••••••••••••••••"
            type="password"
            value={password}
            error={errors.password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />

          {state?.success === false && (
            <p role="alert" className="text-red-500 text-sm">
              {state.message}
            </p>
          )}

          <FormSubmitButton
            isDisabled={isSubmitDisabled}
            isLoading={pending}
            text="Sign up"
          />

          <div className="flex items-center gap-1.5 text-sm text-neutral-400">
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
  );
};

export default SignUpForm;
