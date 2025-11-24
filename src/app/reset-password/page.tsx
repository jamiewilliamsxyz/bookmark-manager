import ResetPasswordForm from "@/components/features/auth/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1 className="text-5xl mb-12">Reset Password</h1>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPasswordPage;
