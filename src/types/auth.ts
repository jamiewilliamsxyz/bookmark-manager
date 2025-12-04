import type { Session, User } from "@supabase/supabase-js";

export type SessionType = Session | null;

export type LoadingType = boolean;

export type UserType = User;

export interface AuthSuccess {
  success: true;
  data: {
    user: UserType | null;
    session: SessionType;
  };
}

export interface AuthSuccessNoData {
  success: true;
}

export interface AuthFailure {
  success: false;
  error: string;
}

export type AuthResult = AuthSuccess | AuthFailure;

export type AuthResultNoData = AuthSuccessNoData | AuthFailure;

export interface AuthContextType {
  session: SessionType;
  isLoading: LoadingType;
  signUpUser: (email: string, password: string) => Promise<AuthResult>;
  logInUser: (email: string, password: string) => Promise<AuthResult>;
  logOutUser: () => Promise<string | null>;
  changePassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<AuthResultNoData>;
}

export interface PasswordResetState {
  error: string | null;
  success: boolean;
}
