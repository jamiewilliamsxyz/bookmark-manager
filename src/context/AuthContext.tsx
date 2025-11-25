"use client";

import { createContext, useState, useEffect } from "react";
import { supabase } from "@/api/supabaseClient";
import { redirect } from "next/navigation";
import type {
  SessionType,
  LoadingType,
  AuthContextType,
  AuthProviderProps,
  AuthResult,
  AuthResultNoData,
  ConfirmationType,
} from "@/types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<SessionType | null>(null);
  const [loading, setLoading] = useState<LoadingType>(true);
  const [confirmation, setConfirmation] = useState<ConfirmationType>({
    isConfirming: false,
    message: null,
  });

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

  // Sign up user
  const signUpUser = async (
    email: string,
    password: string
  ): Promise<AuthResult> => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        console.error("Supabase signup error:", error.message);
        return { success: false, error: error.message };
      } else if (!data.session && !data.user) {
        setSession(null);
        return { success: false, error: "No session returned" };
        // Email confirmation is enabled - returns data.session as null
      } else if (!data.session && data.user) {
        setConfirmation({
          isConfirming: true,
          message: `A confirmation email has been sent to ${email}. Please check your inbox`,
        });
        return { success: true, data: { user: data.user, session: null } };
      } else {
        return { success: false, error: "Signup failed. Please try again." };
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Unexpected signup error:", err.message);
        return { success: false, error: err.message };
      } else {
        console.error("Unknown signup error:", err);
        return { success: false, error: "An unexpected error has occurred" };
      }
    } finally {
      setLoading(false);
    }
  };

  // Check email confirmation
  const checkConfirmation = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error checking session:", error.message);
        setConfirmation((prev) => ({
          ...prev,
          message: "Unable to check your email confirmation. Please try again.",
        }));
        return;
      } else if (data.session) {
        setSession(data.session);
        setConfirmation({
          isConfirming: false,
          message: null,
        });

        redirect("/bookmarks");
      } else {
        setConfirmation((prev) => ({
          ...prev,
          message:
            "Your email has not been confirmed yet. Please check your inbox",
        }));
      }
    } catch (err: unknown) {
      console.error("Unexpected error checking email confirmation:", err);
      setConfirmation((prev) => ({
        ...prev,
        message: "Unexpected error. Please try again.",
      }));
    }
  };

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
      const { error } = await supabase.auth.signOut({ scope: "local" });

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

  // Send password reset email
  const sendPasswordReset = async (
    email: string
  ): Promise<AuthResultNoData> => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:3000/update-password", // UPDATE BEFORE PRODUCTION
      });

      if (error) return { success: false, error: error.message };

      return { success: true };
    } catch (err: unknown) {
      if (err instanceof Error) {
        return { success: false, error: err.message };
      }
      return { success: false, error: "Unexpected error has occurred" };
    } finally {
      setLoading(false);
    }
  };

  // Update password
  const updatePassword = async (
    newPassword: string
  ): Promise<AuthResultNoData> => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) return { success: false, error: error.message };
      return { success: true };
    } catch (err: unknown) {
      if (err instanceof Error) {
        return { success: false, error: err.message };
      }
      return { success: false, error: "Unexpected error has occurred" };
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext
      value={{
        session,
        loading,
        logInUser,
        logOutUser,
        signUpUser,
        confirmation,
        checkConfirmation,
        sendPasswordReset,
        updatePassword,
      }}
    >
      {children}
    </AuthContext>
  );
};
