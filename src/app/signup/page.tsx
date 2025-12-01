import SignUpForm from "@/components/features/auth/auth-forms/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center px-6 w-full">
      <h1 className="text-5xl text-center mb-12">Sign Up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
