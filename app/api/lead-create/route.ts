import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const body = await request.json();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ error: "Server config missing" }, { status: 500 });
  }
  const admin = createClient(supabaseUrl, serviceRoleKey);
  const payload = {
    "Property Address": body.address,
    "First Name": body.firstName,
    "Last Name": body.lastName,
    "Phone Number": body.phoneNumber,
    "Email Address": body.email,
    "Insurance Company": body.insuredBy,
    "Policy Number": body.policyNumber,
    Status: "open",
    Latitude: body.coords?.lat ?? null,
    Longitude: body.coords?.lng ?? null,
  };
  const { data, error } = await admin.from("Leads_Data").insert([payload]).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ lead: data });
}


