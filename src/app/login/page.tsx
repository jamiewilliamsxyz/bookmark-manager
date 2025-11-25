import AuthForm from "@/components/features/auth/auth-forms/AuthForm";

const LogInPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center px-8 w-full">
      <AuthForm type="login" />
    </div>
  );
};

export default LogInPage;
