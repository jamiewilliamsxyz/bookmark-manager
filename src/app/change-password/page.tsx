import ChangePasswordForm from "@/components/features/auth/auth-forms/ChangePasswordForm";

const ChangePasswordPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1 className="text-5xl mb-12">Change Password</h1>
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePasswordPage;
