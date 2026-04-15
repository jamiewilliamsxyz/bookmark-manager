import { supabaseAdmin } from "@/api/supabaseAdminClient";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const cronSecret = process.env.CRON_SECRET!;

export const GET = async (req: NextRequest) => {
  if (req.headers.get("Authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { error } = await supabaseAdmin.from("bookmarks").select("id").limit(1);
  if (error) return NextResponse.json({ error }, { status: 500 });

  return NextResponse.json({ status: "ok" });
};