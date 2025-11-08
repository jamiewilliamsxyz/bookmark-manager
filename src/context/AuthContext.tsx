"use client";

import { createContext, useState, useEffect, use } from "react";
import { supabase } from "@/api/supabaseClient";
import type {
  SessionType,
  LoadingType,
  AuthContextType,
  AuthProviderProps,
} from "@/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<SessionType | null>(null);
  const [loading, setLoading] = useState<LoadingType>(true);

  useEffect(() => {
    // Check on first render for a session
    const getInitialSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        // Check for Supabase error
        if (error) {
          console.error("Supabase session fetch error:", error);
          // Check if user isn't logged in
        } else if (!data.session) {
          setSession(null);
          // If user is logged in and no error, set session
        } else {
          setSession(data.session);
        }
      } catch (err) {
        console.error("Error while fetching session:", err);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Listen to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup to stop listening to auth events
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <AuthContext value={{ session, loading }}>{children}</AuthContext>;
};

export const useAuth = () => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error("useAuth needs to be used in AuthProvider");
  }
  return context;
};
