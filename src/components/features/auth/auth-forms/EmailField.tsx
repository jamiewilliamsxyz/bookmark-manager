import { useAuth } from "@/hooks/context-hooks/useAuth";
import { useAuthFormValidation } from "@/hooks/form-hooks/useAuthFormValidation";
import FormInputField from "@/components/form/FormInputField";

const EmailField = () => {
  const { session } = useAuth();
  const { email, errors, handleEmailChange } = useAuthFormValidation({
    initialEmail: session?.user.email || "",
  });

  return (
    <FormInputField
      id="email"
      label="Email"
      placeholder="example@gmail.com"
      type="email"
      value={email}
      error={errors.email}
      onChange={(e) => handleEmailChange(e.target.value)}
    />
  );
};

export default EmailField;
