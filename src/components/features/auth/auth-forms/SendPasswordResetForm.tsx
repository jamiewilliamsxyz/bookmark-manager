"use client";

import { useActionState } from "react";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import { useAuthFormValidation } from "@/hooks/form-hooks/useAuthFormValidation";
import { preventEnterSubmit } from "@/lib/preventEnterSubmit";
import FormSubmitButton from "@/components/ui/FormSubmitButton";
import type { PasswordResetState } from "@/types";

const ResetPasswordForm = () => {
  const { session, sendPasswordReset } = useAuth();
  const { errors, email, handleEmailChange } = useAuthFormValidation({
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
        <div className="bg-[#1a1a1a] rounded-md shadow p-5 border border-neutral-800">
          <p className="text-neutral-400 text-center">
            A password reset link has been
            <br />
            sent to your inbox
          </p>
        </div>
      ) : (
        <form
          noValidate
          onKeyDown={preventEnterSubmit}
          action={formAction}
          className="bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 border border-neutral-800 justify-center"
        >
          <div>
            <label htmlFor="email" className="text-lg">
              Email
            </label>

            {errors.email.status && (
              <p className="text-red-500 mt-0.5 text-sm">
                {errors.email.message}
              </p>
            )}

            <input
              onChange={(e) => handleEmailChange(e.target.value)}
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
