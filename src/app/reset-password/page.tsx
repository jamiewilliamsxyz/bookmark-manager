import SendPasswordResetForm from "@/components/features/auth/auth-forms/SendPasswordResetForm";

const ResetPasswordPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1 className="text-5xl mb-12">Reset Password</h1>
      <SendPasswordResetForm />
    </div>
  );
};

export default ResetPasswordPage;
