"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import { useAuthFormValidation } from "@/hooks/form-hooks/useAuthFormValidation";
import PasswordField from "@/components/features/auth/auth-forms/PasswordField";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import type { PasswordResetState } from "@/types";

const ChangePasswordForm = () => {
  const { updatePassword } = useAuth();
  const { errors } = useAuthFormValidation();

  const [state, formAction, pending] = useActionState(
    async (_prevState: PasswordResetState | null, formData: FormData) => {
      const password = formData.get("password");
      const res = await updatePassword(password as string);

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
        <div className="bg-[#1a1a1a] rounded-md shadow p-5 border border-neutral-800 flex flex-col gap-5">
          <p className="text-neutral-400">
            You password has been successfully
            <br />
            been updated
          </p>
          <Link href="/login" className="w-fit h-fit">
            Return
          </Link>
        </div>
      ) : (
        <form
          noValidate
          action={formAction}
          className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 justify-start min-w-88 max-w-88"
        >
          <PasswordField />

          {state.error && <p className="text-red-500 text-sm">{state.error}</p>}

          <FormSubmitButton
            isDisabled={pending || state.success || errors.password.status}
            isLoading={pending}
            text="Update"
          />
        </form>
      )}
    </>
  );
};

export default ChangePasswordForm;
