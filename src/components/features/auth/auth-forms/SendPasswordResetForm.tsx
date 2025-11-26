"use client";

import { useActionState } from "react";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import { useAuthFormValidation } from "@/hooks/form-hooks/useAuthFormValidation";
import EmailField from "@/components/features/auth/auth-forms/EmailField";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import type { PasswordResetState } from "@/types";

const ResetPasswordForm = () => {
  const { session, sendPasswordReset } = useAuth();
  const { errors } = useAuthFormValidation({
    initialEmail: session?.user?.email || "",
  });

  const [state, formAction, pending] = useActionState(
    async (_prevState: PasswordResetState | null, formData: FormData) => {
      const email = formData.get("email");
      const res = await sendPasswordReset(email as string);

      if (!res.success) {
        return {
          error: res.error || "Something went wrong",
          success: false,
        };
      }

      return {
        error: null,
        success: true,
      };
    },
    { error: null, success: false }
  );

  return (
    <>
      {state.success ? (
        <div className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5">
          <p className="text-neutral-400 text-center">
            A password reset link has been
            <br />
            sent to your inbox
          </p>
        </div>
      ) : (
        <form
          noValidate
          action={formAction}
          className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 justify-start min-w-88 max-w-88"
        >
          <EmailField />

          {state.error && <p className="text-red-500 text-sm">{state.error}</p>}

          <FormSubmitButton
            isDisabled={pending || state.success || errors.email.status}
            isLoading={pending}
            text="Send"
          />

          <p className="text-neutral-400 text-sm">
            You&apos;ll receive an email to reset your password
          </p>
        </form>
      )}
    </>
  );
};

export default ResetPasswordForm;
