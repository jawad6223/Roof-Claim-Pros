"use client";
import { useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import haversineDistance from "@/utils/haversineDistance";
import { toast } from "react-toastify";

// ✅ Auto Assign Leads to Pending Contractors
export const AutoAssignNewLeads = ({ newLead }: { newLead: any }) => {
    const lastProcessedLeadId = useRef<number | null>(null);
    console.log("newLead", newLead);
  useEffect(() => {
    const autoAssign = async () => {
        if (!newLead || !newLead.id) return;
        if (lastProcessedLeadId.current === newLead.id) return;
        lastProcessedLeadId.current = newLead.id;

      try {
        console.log("🚀 Auto-assign process started for:", newLead);

        // 1️⃣ Fetch all pending contractor requests (FIFO)
        const { data: pendingRequests, error: requestError } = await supabase
          .from("Leads_Request")
          .select("*")
          .eq("Status", "pending")
          .order("created_at", { ascending: true });

        if (requestError) throw requestError;
        if (!pendingRequests?.length) {
          console.log("No pending contractor requests found.");
          return;
        }

        // 2️⃣ Loop through pending contractors
        for (const request of pendingRequests) {
          const { contractor_id, id: requestId } = request;

          // Get contractor info
          const { data: contractor, error: contractorError } = await supabase
            .from("Roofing_Auth")
            .select('"Latitude", "Longitude", "Service Radius", "Full Name"')
            .eq("user_id", contractor_id)
            .maybeSingle();

          if (contractorError) throw contractorError;
          if (!contractor) continue;

          const contractorLat = contractor["Latitude"];
          const contractorLng = contractor["Longitude"];
          const contractorRadius = parseFloat(contractor["Service Radius"]);

          // 3️⃣ Calculate distance
          const distance = haversineDistance(
            contractorLat,
            contractorLng,
            newLead["Latitude"],
            newLead["Longitude"]
          );

          // 4️⃣ If lead is within contractor radius
          if (distance <= contractorRadius) {
            console.log(
              `✅ Lead ${newLead["Email Address"]} within ${contractor["Full Name"]}'s radius`
            );

            const { error: insertAssignedError } = await supabase
              .from("Assigned_Leads")
              .insert([
                {
                  contractor_id,
                  request_id: requestId,
                  "First Name": newLead["First Name"],
                  "Last Name": newLead["Last Name"],
                  "Phone Number": newLead["Phone Number"],
                  "Email Address": newLead["Email Address"],
                  "Property Address": newLead["Property Address"],
                  "Insurance Company": newLead["Insurance Company"],
                  "Policy Number": newLead["Policy Number"],
                  "Assigned Date": new Date().toISOString(),
                  Latitude: newLead["Latitude"],
                  Longitude: newLead["Longitude"],
                },
              ]);

            if (insertAssignedError) throw insertAssignedError;
            console.log("✅ Added lead to Assigned_Leads");

            // ➕ insert into Contractor_Leads
            const { error: insertContractorLeadError } = await supabase
              .from("Contractor_Leads")
              .insert([
                {
                  contractor_id,
                  lead_id: newLead.id,
                  "First Name": newLead["First Name"],
                  "Last Name": newLead["Last Name"],
                  "Phone Number": newLead["Phone Number"],
                  "Email Address": newLead["Email Address"],
                  "Property Address": newLead["Property Address"],
                  "Insurance Company": newLead["Insurance Company"],
                  "Policy Number": newLead["Policy Number"],
                  Latitude: newLead["Latitude"],
                  Longitude: newLead["Longitude"],
                  status: "open",
                },
              ]);

            if (insertContractorLeadError) throw insertContractorLeadError;

            // 5️⃣ Update Leads_Request counts
            const newSendLeads = request["Send Leads"] + 1;
            const newPendingLeads = request["Pending Leads"] - 1;
            const newStatus =
              newPendingLeads <= 0 ? "assigned" : "pending";

            const { error: updateRequestError } = await supabase
              .from("Leads_Request")
              .update({
                "Send Leads": newSendLeads,
                "Pending Leads": newPendingLeads,
                "Status": newStatus,
              })
              .eq("id", requestId);

            if (updateRequestError) throw updateRequestError;

            // 6️⃣ Update Leads_Data status
            const { error: updateLeadError } = await supabase
              .from("Leads_Data")
              .update({ Status: "close" })
              .eq("id", newLead.id);

            if (updateLeadError) throw updateLeadError;
            return;
          }
        }

        // 7️⃣ If no match found
        console.log("❌ No contractor found for this lead");
        await supabase
          .from("Leads_Data")
          .update({ Status: "open" })
          .eq("id", newLead.id);
      } catch (err) {
        console.error("Auto-assign error:", err);
        toast.error("Failed to auto-assign lead");
      }
    };

    autoAssign();
  }, [newLead]);

  return null;
};
