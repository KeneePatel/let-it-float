'use server'

import supabase from "@/lib/supabase";
import { NextResponse } from "next/server";

import type { Database } from "@/types/database.types";

export async function GET() {
  const { data, error } = await supabase
    .from("message_with_content")
    .select("*")
    .eq("status", "ACTIVE")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  type MessageContent = Database["public"]["Tables"]["message_contents"]["Insert"];

  const { content } = await request.json() as MessageContent;

  if (!content)
    return NextResponse.json({ error: "Content is required" }, { status: 400 });

  const { data: message, error } = await supabase
    .from("messages")
    .insert([{ status: "ACTIVE" }])
    .select()
    .single();

  if (error) return NextResponse.json({ error }, { status: 500 });

  const { error: contentError } = await supabase
    .from("message_contents")
    .insert([{
        message_id: message.id,
        content,
        is_encrypted: false,
      },
    ])
    .select()
    .single();

  if (contentError)
    return NextResponse.json({ error: contentError }, { status: 500 });
  return NextResponse.json(message);
}
