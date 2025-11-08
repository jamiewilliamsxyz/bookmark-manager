import type { Session } from "@supabase/supabase-js";

export type SessionType = Session;

export type LoadingType = boolean;

export interface AuthContextType {
  session: SessionType | null;
  loading: LoadingType;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
