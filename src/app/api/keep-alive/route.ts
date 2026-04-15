import { supabaseAdmin } from "@/api/supabaseAdminClient";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { error } = await supabaseAdmin.from("bookmarks").select("id").limit(1);
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ status: "ok" });
};
