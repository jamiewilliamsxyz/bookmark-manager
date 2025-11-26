"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import { useAuthFormValidation } from "@/hooks/form-hooks/useAuthFormValidation";
import { preventEnterSubmit } from "@/lib/preventEnterSubmit";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import type { PasswordResetState } from "@/types";

const ChangePasswordForm = () => {
  const { updatePassword } = useAuth();
  const { errors, password, handlePasswordChange } = useAuthFormValidation();

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
          onKeyDown={preventEnterSubmit}
          action={formAction}
          className="bg-[#1a1a1a] rounded-md shadow p-5 flex flex-col gap-5 border border-neutral-800 justify-center"
        >
          <div>
            <label htmlFor="password" className="text-lg">
              New password
            </label>

            {errors.password.status && (
              <p className="text-red-500 mt-0.5 text-sm">
                {errors.password.message}
              </p>
            )}

            <input
              onChange={(e) => handlePasswordChange(e.target.value)}
              value={password}
              placeholder="••••••••••••••••"
              id="password"
              name="password"
              type="password"
              required
              aria-required="true"
              className="mt-1 py-2 px-3 bg-neutral-900 rounded-md border border-neutral-800 w-full focus:outline-none"
            />
          </div>

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
