import { useAuthFormValidation } from "@/hooks/form-hooks/useAuthFormValidation";
import FormInputField from "@/components/form/FormInputField";

const PasswordField = () => {
  const { password, errors, handlePasswordChange } = useAuthFormValidation();

  return (
    <FormInputField
      id="password"
      label="Password"
      placeholder="••••••••••••••••"
      type="password"
      value={password}
      error={errors.password}
      onChange={(e) => handlePasswordChange(e.target.value)}
    />
  );
};

export default PasswordField;
