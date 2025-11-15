import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const API_KEY = process.env.OPEN_SEA_API_KEY;
    if (!API_KEY) {
      return NextResponse.json(
        { error: "Missing OpenSea API key" },
        { status: 500 }
      );
    }

    // OpenSea V2 chain/Base endpoint
    const url = "https://api.opensea.io/api/v2/chain/base/nfts";

    const res = await fetch(url + "?limit=20", {
      headers: {
        "accept": "application/json",
        "X-API-KEY": API_KEY,
      },
    });

    const data = await res.json();

    return NextResponse.json(data);

  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
