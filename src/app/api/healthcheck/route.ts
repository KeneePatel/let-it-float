import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Let it Float API is healthy" });
}
