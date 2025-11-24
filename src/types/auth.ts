import type { Session, User } from "@supabase/supabase-js";

export type SessionType = Session | null;

export type LoadingType = boolean;

export type UserType = User;

export interface ConfirmationType {
  isConfirming: boolean;
  message: string | null;
}

export interface AuthSuccess {
  success: true;
  data: {
    user: UserType | null;
    session: SessionType;
  };
}

export interface AuthFailure {
  success: false;
  error: string;
}

export type AuthResult = AuthSuccess | AuthFailure;

export interface AuthContextType {
  session: SessionType;
  loading: LoadingType;
  signUpUser: (email: string, password: string) => Promise<AuthResult>;
  logInUser: (email: string, password: string) => Promise<AuthResult>;
  logOutUser: () => Promise<void>;
  resetPassword: () => Promise<void>;
  confirmation: ConfirmationType;
  checkConfirmation: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthFormProps {
  type: "login" | "signup";
}
