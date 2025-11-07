import type { Session } from "@supabase/supabase-js";

export type SessionType = Session;

export type LoadingType = boolean;

export interface AuthContextType {
  session: SessionType | null | undefined;
  loading: LoadingType;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
