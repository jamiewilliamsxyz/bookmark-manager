"use server";

import { supabaseAdmin } from "@/api/supabaseAdminClient";
import type { UserType } from "@/types";

export const deleteUser = async (userId: string): Promise<UserType | null> => {
  try {
    const { data, error } = await supabaseAdmin.auth.admin.deleteUser(userId);
    if (error) throw new Error(error.message);
    return data.user;
  } catch (err: unknown) {
    if (err instanceof Error)
      console.error("Error deleting user:", err.message);
    else console.error("Unknown error deleting user:", err);
    return null;
  }
};
