import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PATCH(req, context) {
  const { id } = await context.params;   // ✅ FIX
  const body = await req.json();

  const { error } = await supabase
    .from("requests")
    .update({ status: body.status })
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
