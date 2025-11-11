import type { Session, User } from "@supabase/supabase-js";

export type SessionType = Session;

export type LoadingType = boolean;

export interface AuthSuccess {
  success: true;
  data: {
    user: User;
    session: SessionType;
  };
}

export interface AuthFailure {
  success: false;
  error: string;
}

export type AuthResult = AuthSuccess | AuthFailure;

export interface AuthContextType {
  session: SessionType | null;
  loading: LoadingType;
  logInUser: (email: string, password: string) => Promise<AuthResult>;
  logOutUser: () => Promise<void>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthFormProps {
  type: "login" | "signup";
}
