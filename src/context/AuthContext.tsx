"use client";

import { createContext, useState, useEffect } from "react";
import { supabase } from "@/api/supabaseClient";
import type {
  SessionType,
  LoadingType,
  AuthContextType,
  AuthProviderProps,
  AuthResult,
} from "@/types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

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
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error fetching session:", err.message);
        } else {
          console.error("Unknown error fetching session:", err);
        }
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

  // Log in user
  const logInUser = async (
    email: string,
    password: string
  ): Promise<AuthResult> => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password: password,
      });

      // Handle Supabase error
      if (error) {
        console.error("Supabase login error:", error.message);
        return { success: false, error: error.message };
      } else if (!data.session) {
        setSession(null);
        return { success: false, error: "No session returned" };
      } else {
        // Handle success
        setSession(data.session);
        return {
          success: true,
          data: { user: data.user, session: data.session },
        };
      }
    } catch (err: unknown) {
      // Handle unexpected error
      if (err instanceof Error) {
        console.error("Unexpected login error:", err.message);
        return { success: false, error: err.message };
      } else {
        console.error("Unknown login error:", err);
        return { success: false, error: "Unexpected error has occurred" };
      }
    } finally {
      setLoading(false);
    }
  };

  // Log out user
  const logOutUser = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();

      if (error) console.error("Supabase logout error:", error.message);

      setSession(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Unexpected logout error has occurred:", err.message);
      } else {
        console.error("Unknown logout error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext value={{ session, loading, logInUser, logOutUser }}>
      {children}
    </AuthContext>
  );
};
