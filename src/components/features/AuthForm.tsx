import Form from "next/form";

interface Props {
  type: "login" | "signup";
}

const AuthForm = ({ type }: Props) => {
  return (
    <Form
      action={null}
      className="flex flex-col gap-5 w-full max-w-sm px-5 py-8 bg-neutral-100 shadow-lg rounded-lg text-neutral-700"
    >
      <h1 className="text-neutral-800 text-4xl font-semibold text-center leading-none">
        {type === "login" ? "Log In" : "Sign Up"}
      </h1>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="border p-2 rounded-lg w-full mt-2"
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          className="border p-2 rounded-lg w-full mt-2"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-3.5 cursor-pointer p-2 font-medium text-lg w-full rounded-lg shadow-lg bg-neutral-800 text-neutral-100 hover:opacity-75 duration-200 transition-opacity"
      >
        {type === "login" ? "Log In" : "Sign Up"}
      </button>
    </Form>
  );
};

export default AuthForm;
