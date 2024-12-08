import supabase from "@/lib/supabase"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const { data: message, error } = await supabase
    .from("message_with_content")
    .select("*")
    .eq("id", id)
    .single()

  if (error) return NextResponse.json({ error }, { status: 500 })

  return NextResponse.json(message)
}
