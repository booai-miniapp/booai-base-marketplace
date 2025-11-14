import { NextResponse } from "next/server";

let IN_MEMORY_DROPS: any[] = []; // demo only — replace with DB

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const id = `drop_${Date.now()}`;
    IN_MEMORY_DROPS.push({ id, createdAt: new Date().toISOString(), body });
    return NextResponse.json({ dropId: id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ drops: IN_MEMORY_DROPS });
}
