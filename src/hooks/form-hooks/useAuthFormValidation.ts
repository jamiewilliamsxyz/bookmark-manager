// Auth form validation

import { useState } from "react";
import { VALIDATION_RULES, INITIAL_ERROR } from "@/constants/bookmarks";

interface UseAuthFormValidationProps {
  initialEmail?: string;
}

export const useAuthFormValidation = ({
  initialEmail = "",
}: UseAuthFormValidationProps = {}) => {
  const [email, setEmail] = useState<string>(initialEmail);
  const [password, setPassword] = useState<string>("");

  const [errors, setErrors] = useState({
    email: INITIAL_ERROR,
    password: INITIAL_ERROR,
  });

  const {
    EMAIL_MAX_LENGTH,
    EMAIL_PATTERN,
    PASSWORD_MIN_LENGTH,
    PASSWORD_MAX_LENGTH,
  } = VALIDATION_RULES;

  // Email validation
  const validateEmail = (value: string) => {
    if (value.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        email: {
          status: true,
          message: "Email is required",
        },
      }));
      return false;
    }

    if (value.length > EMAIL_MAX_LENGTH) {
      setErrors((prev) => ({
        ...prev,
        email: {
          status: true,
          message: `Please enter a valid email address ${EMAIL_MAX_LENGTH} or less`,
        },
      }));
      return false;
    }

    if (!EMAIL_PATTERN.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: {
          status: true,
          message: "Please enter a valid email address",
        },
      }));
      return false;
    }

    setErrors((prev) => ({
      ...prev,
      email: INITIAL_ERROR,
    }));
    return true;
  };

  // Password validation
  const validatePassword = (value: string) => {
    if (value.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        password: {
          status: true,
          message: "Password is required",
        },
      }));
      return false;
    }

    if (value.length < PASSWORD_MIN_LENGTH) {
      setErrors((prev) => ({
        ...prev,
        password: {
          status: true,
          message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
        },
      }));
      return false;
    }

    if (value.length > PASSWORD_MAX_LENGTH) {
      setErrors((prev) => ({
        ...prev,
        password: {
          status: true,
          message: `Password must be ${PASSWORD_MAX_LENGTH} characters or fewer`,
        },
      }));
      return false;
    }

    setErrors((prev) => ({
      ...prev,
      password: INITIAL_ERROR,
    }));
    return true;
  };

  // Handle email input state
  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

  // Handle password input state
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    validatePassword(value);
  };

  const isError = () => {
    return errors.email.status || errors.password.status;
  };

  return {
    email,
    password,
    errors,
    handleEmailChange,
    handlePasswordChange,
    isError,
  };
};
