import AuthForm from "@/components/features/auth/AuthForm";

const SignUpPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center px-8 w-full">
      <AuthForm type="signup" />
    </div>
  );
};

export default SignUpPage;
