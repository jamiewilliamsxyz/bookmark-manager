"use server";

import { supabaseAdmin } from "@/api/supabaseAdminClient";

export const deleteUser = async (userId: string): Promise<string | null> => {
  try {
    const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);
    if (error) return error.message;
    return null;
  } catch (err) {
    return err instanceof Error ? err.message : "Unexpected error occurred";
  }
};
