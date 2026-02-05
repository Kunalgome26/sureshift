import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/* ================= CREATE REQUEST ================= */
export async function POST(req) {
  try {
    const body = await req.json();

    const { error } = await supabase.from("requests").insert([
      {
        name: body.name,
        phone: body.phone,

        from_city: body.fromCity,
        from_address: body.fromAddress,

        to_city: body.toCity,
        to_address: body.toAddress,

        service: body.service,
        move_date: body.date,

        message: body.message,
      },
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

/* ================= GET REQUESTS (ADMIN) ================= */
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
