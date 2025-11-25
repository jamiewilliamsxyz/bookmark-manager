import UpdatePasswordForm from "@/components/features/auth/auth-forms/UpdatePasswordForm";

const UpdatePasswordPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1 className="text-5xl mb-12">Update Password</h1>
      <UpdatePasswordForm />
    </div>
  );
};

export default UpdatePasswordPage;
