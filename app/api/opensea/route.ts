import { NextResponse } from "next/server";

const OPENSEA_API = "https://api.opensea.io/api/v1/assets";

/**
 * Server-side proxy to call OpenSea with an API key stored in environment
 * Add OPEN_SEA_API_KEY to Vercel / GitHub Secrets.
 */
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit") || "24";

    const apiKey = process.env.OPEN_SEA_API_KEY || "";
    const params = new URLSearchParams({
      limit,
    });
    const finalUrl = `${OPENSEA_API}?${params.toString()}`;

    const res = await fetch(finalUrl, {
      headers: {
        "Accept": "application/json",
        ...(apiKey ? { "X-API-KEY": apiKey } : {})
      }
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "error" }, { status: 500 });
  }
}
