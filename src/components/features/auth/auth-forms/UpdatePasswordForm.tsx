"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import { useAuthFormValidation } from "@/hooks/form-hooks/useAuthFormValidation";
import FormInputField from "@/components/form/FormInputField";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import type { PasswordResetState } from "@/types";

const UpdatePasswordForm = () => {
  const { updatePassword } = useAuth();
  const { errors, password, handlePasswordChange, isError } =
    useAuthFormValidation();

  const [state, formAction, pending] = useActionState(
    async (_prevState: PasswordResetState | null, formData: FormData) => {
      const formPassword = formData.get("password");
      const res = await updatePassword(formPassword as string);

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

  const isSubmitDisabled =
    isError() ||
    !password.trim() ||
    pending ||
    state.success ||
    errors.password.status;

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
          <FormInputField
            id="password"
            label="Password"
            placeholder="••••••••••••••••"
            type="password"
            value={password}
            error={errors.password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />

          {state.error && <p className="text-red-500 text-sm">{state.error}</p>}

          <FormSubmitButton
            isDisabled={isSubmitDisabled}
            isLoading={pending}
            text="Update"
          />
        </form>
      )}
    </>
  );
};

export default UpdatePasswordForm;
