import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const input = searchParams.get("input");

  if (!input) {
    return NextResponse.json({ error: "Missing input" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server configuration error: missing API key" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
        input
      )}&key=${apiKey}&components=country:us`
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch from Google Places API" },
      { status: 500 }
    );
  }
}



// export const dynamic = "force-dynamic";
// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const input = searchParams.get("input");

//     if (!input) {
//       return NextResponse.json({ error: "Missing input" }, { status: 400 });
//     }

//     const apiKey = process.env.GOOGLE_PLACES_API_KEY;
//     if (!apiKey) {
//       console.error("❌ GOOGLE_PLACES_API_KEY is missing!");
//       return NextResponse.json(
//         { error: "Server misconfiguration: API key missing" },
//         { status: 500 }
//       );
//     }

//     const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
//       input
//     )}&types=(regions)&components=country:us&key=${apiKey}`;

//     console.log("➡️ Requesting Google API:", url);

//     const res = await fetch(url);

//     if (!res.ok) {
//       const text = await res.text();
//       console.error("❌ Google API fetch failed:", res.status, text);
//       return NextResponse.json(
//         { error: "Google API error", status: res.status, details: text },
//         { status: 500 }
//       );
//     }

//     const data = await res.json();
//     console.log("✅ Google API response:", data);

//     return NextResponse.json(data);
//   } catch (error: any) {
//     console.error("❌ API route crashed:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error", details: error.message },
//       { status: 500 }
//     );
//   }
// }