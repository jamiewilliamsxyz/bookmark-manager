"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import { useAuthFormValidation } from "@/hooks/form-hooks/useAuthFormValidation";
import FormInputField from "@/components/form/FormInputField";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import CloseModalButton from "@/components/modal/CloseModalButton";
import type { PasswordResetState } from "@/types";

const ChangePasswordForm = () => {
  const { changePassword } = useAuth();
  const { errors, password, handlePasswordChange, isError } =
    useAuthFormValidation();

  const [currentPassword, setCurrentPassword] = useState("");

  const [state, formAction, pending] = useActionState(
    async (_prevState: PasswordResetState | null, formData: FormData) => {
      const formCurrentPassword = formData.get("currentPassword");
      const formNewPassword = formData.get("newPassword");

      const res = await changePassword(
        formCurrentPassword as string,
        formNewPassword as string
      );

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
    !currentPassword.trim() ||
    pending ||
    state.success ||
    errors.password.status;

  return (
    <>
      {state.success ? (
        <div className="bg-[#1a1a1a] rounded-md shadow p-5 border border-neutral-800 flex flex-col gap-5">
          <p className="text-neutral-400">
            Your password has been successfully
            <br />
            been changed
          </p>
          <Link href="/bookmarks" className="w-fit h-fit">
            Return
          </Link>
        </div>
      ) : (
        <form
          noValidate
          action={formAction}
          aria-label="Change password"
          className="border border-neutral-800 bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 justify-start w-82 sm:w-88"
        >
          <div>
            <label htmlFor="currentPassword" className="text-lg">
              Current password
            </label>

            <input
              placeholder="••••••••••••••••"
              id="currentPassword"
              name="currentPassword"
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              aria-required="true"
              className="mt-1 py-2 px-3 bg-neutral-900 rounded-md border border-neutral-800 w-full focus:outline-none"
            />
          </div>

          <FormInputField
            id="newPassword"
            label="New password"
            placeholder="••••••••••••••••"
            type="password"
            value={password}
            error={errors.password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />

          {state.error && (
            <p role="alert" className="text-red-500 text-sm">
              {state.error}
            </p>
          )}

          <FormSubmitButton
            isDisabled={isSubmitDisabled}
            isLoading={pending}
            text="Change"
          />

          <CloseModalButton>Return</CloseModalButton>
        </form>
      )}
    </>
  );
};

export default ChangePasswordForm;
