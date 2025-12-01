import LogInForm from "@/components/features/auth/auth-forms/LogInForm";

const LogInPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center px-6 w-full">
      <h1 className="text-5xl text-center mb-12">Log In</h1>
      <LogInForm />
    </div>
  );
};

export default LogInPage;
