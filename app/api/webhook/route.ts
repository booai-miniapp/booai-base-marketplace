import { NextResponse } from "next/server";

export async function POST() {
  console.log("Webhook received");
  return NextResponse.json({ ok: true });
}
