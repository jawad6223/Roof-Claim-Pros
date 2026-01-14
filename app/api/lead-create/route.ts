import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import haversineDistance from "@/utils/haversineDistance";

export async function POST(request: Request) {
  const body = await request.json();
  const zapierWebhook = process.env.ZAPIER_WEBHOOK_URL;

  // 1️⃣ Prepare payload for DB
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

  // 2️⃣ Insert lead
  const { data: lead, error } = await supabaseAdmin
    .from("Leads_Data")
    .insert([payload])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Track FINAL status
  let finalStatus: "open" | "close" = "open";
  let assignedContractorName: string | null = null;

  // 3️⃣ Fetch pending requests
  const { data: pendingRequests, error: requestError } = await supabaseAdmin
    .from("Leads_Request")
    .select("*")
    .ilike("Status", "pending")
    .order("created_at", { ascending: true });

  if (requestError) {
    return NextResponse.json({ error: requestError.message }, { status: 500 });
  }

  // 4️⃣ Auto-assign logic
  if (pendingRequests && pendingRequests.length > 0) {
    for (const requestRow of pendingRequests) {
      const contractorId = requestRow.contractor_id;
      const requestId = requestRow.id;

      const { data: contractor, error: contractorError } = await supabaseAdmin
        .from("Roofing_Auth")
        .select('"Latitude", "Longitude", "Service Radius", "Full Name"')
        .eq("user_id", contractorId)
        .maybeSingle();

      if (contractorError || !contractor) continue;

      const distance = haversineDistance(
        contractor["Latitude"],
        contractor["Longitude"],
        lead["Latitude"],
        lead["Longitude"]
      );

      if (distance <= parseFloat(contractor["Service Radius"])) {
        // Assign lead
        await supabaseAdmin.from("Assigned_Leads").insert([
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

        await supabaseAdmin.from("Contractor_Leads").insert([
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

        const newSendLeads = requestRow["Send Leads"] + 1;
        const newPendingLeads = requestRow["Pending Leads"] - 1;

        await supabaseAdmin
          .from("Leads_Request")
          .update({
            "Send Leads": newSendLeads,
            "Pending Leads": newPendingLeads,
            Status: newPendingLeads <= 0 ? "assigned" : "pending",
          })
          .eq("id", requestId);

        await supabaseAdmin
          .from("Leads_Data")
          .update({ Status: "close" })
          .eq("id", lead.id);

        finalStatus = "close";
        assignedContractorName = contractor["Full Name"];

        break;
      }
    }
  }

  // 5️⃣ webhook
  if (zapierWebhook) {
    fetch(zapierWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead_id: lead.id,
        firstName: lead["First Name"],
        lastName: lead["Last Name"],
        phoneNumber: lead["Phone Number"],
        email: lead["Email Address"],
        address: lead["Property Address"],
        insurance: lead["Insurance Company"],
        policyNumber: lead["Policy Number"],
        latitude: lead["Latitude"],
        longitude: lead["Longitude"],
        status: finalStatus,
        assigned_to: assignedContractorName,
      }),
    }).catch((err) => {
      console.error("Zapier webhook failed:", err);
    });
  }

  return NextResponse.json({
    lead,
    autoAssigned: finalStatus === "close",
  });
}