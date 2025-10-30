import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import haversineDistance from "@/utils/haversineDistance";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

    if (!supabaseUrl) {
      return NextResponse.json({ error: "NEXT_PUBLIC_SUPABASE_URL is not set" }, { status: 500 });
    }
    if (!serviceRoleKey) {
      return NextResponse.json({ error: "SUPABASE_SERVICE_ROLE_KEY is not set" }, { status: 500 });
    }
    const admin = createClient(supabaseUrl, serviceRoleKey);

    const insertPayload = {
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
    } as const;

    const { data: inserted, error: insertError } = await admin
      .from("Leads_Data")
      .insert([insertPayload])
      .select()
      .single();

    if (insertError) throw insertError;

    const lead = inserted;

    const { data: pendingRequests, error: requestError } = await admin
      .from("Leads_Request")
      .select("*")
      .eq("Status", "pending")
      .order("created_at", { ascending: true });

    if (requestError) throw requestError;

    if (pendingRequests && pendingRequests.length > 0) {
      for (const requestRow of pendingRequests) {
        const contractorId = requestRow.contractor_id;
        const requestId = requestRow.id;

        const { data: contractor, error: contractorError } = await admin
          .from("Roofing_Auth")
          .select('"Latitude", "Longitude", "Service Radius", "Full Name"')
          .eq("user_id", contractorId)
          .maybeSingle();

        if (contractorError) throw contractorError;
        if (!contractor) continue;

        const distance = haversineDistance(
          contractor["Latitude"],
          contractor["Longitude"],
          lead["Latitude"],
          lead["Longitude"]
        );

        if (distance <= parseFloat(contractor["Service Radius"])) {
          const { error: insertAssignedError } = await admin
            .from("Assigned_Leads")
            .insert([
              {
                contractor_id: contractorId,
                request_id: requestId,
                "First Name": lead["First Name"],
                "Last Name": lead["Last Name"],
                "Phone Number": lead["Phone Number"],
                "Email Address": lead["Email Address"],
                "Property Address": lead["Property Address"],
                "Insurance Company": lead["Insurance Company"],
                "Policy Number": lead["Policy Number"],
                "Assigned Date": new Date().toISOString(),
                Latitude: lead["Latitude"],
                Longitude: lead["Longitude"],
              },
            ]);

          if (insertAssignedError) throw insertAssignedError;

          const { error: insertContractorLeadError } = await admin
            .from("Contractor_Leads")
            .insert([
              {
                contractor_id: contractorId,
                lead_id: lead.id,
                "First Name": lead["First Name"],
                "Last Name": lead["Last Name"],
                "Phone Number": lead["Phone Number"],
                "Email Address": lead["Email Address"],
                "Property Address": lead["Property Address"],
                "Insurance Company": lead["Insurance Company"],
                "Policy Number": lead["Policy Number"],
                Latitude: lead["Latitude"],
                Longitude: lead["Longitude"],
                status: "open",
              },
            ]);

          if (insertContractorLeadError) throw insertContractorLeadError;

          const newSendLeads = requestRow["Send Leads"] + 1;
          const newPendingLeads = requestRow["Pending Leads"] - 1;
          const newStatus = newPendingLeads <= 0 ? "assigned" : "pending";

          const { error: updateRequestError } = await admin
            .from("Leads_Request")
            .update({
              "Send Leads": newSendLeads,
              "Pending Leads": newPendingLeads,
              Status: newStatus,
            })
            .eq("id", requestId);

          if (updateRequestError) throw updateRequestError;

          const { error: updateLeadError } = await admin
            .from("Leads_Data")
            .update({ Status: "close" })
            .eq("id", lead.id);

          if (updateLeadError) throw updateLeadError;

          return NextResponse.json({ lead, autoAssigned: true });
        }
      }
    }

    await admin.from("Leads_Data").update({ Status: "open" }).eq("id", lead.id);
    return NextResponse.json({ lead, autoAssigned: false });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status: 500 });
  }
}


