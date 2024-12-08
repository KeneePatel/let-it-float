'use client'

import Link from 'next/link'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { use, useEffect, useState } from 'react'

import type { Database } from '@/types/database.types'

type MessageWithContent = Database["public"]["Views"]["message_with_content"]["Row"]

export default function MessagePage({ params }: { params: Promise<{ id: string }> }) {
  const id = use(params).id;
  const [ship, setShip] = useState<MessageWithContent | null>(null)

  async function fetchMessage() {
    const res = await fetch(`/api/messages/${id}`);
    if (!res.ok) {
      console.error(`Error fetching message with id ${id}: ${res.statusText}`);
      return
    }

    const message: MessageWithContent = await res.json();
    setShip(message)
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  if (!ship) {
    return <div>Ship not found</div>
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-136px)] bg-gradient-to-b from-blue-100 to-white p-4">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-blue-800">Ship #{ship.id}</h1>
          <p className="text-gray-700 text-lg mb-4">{ship.content}</p>
          <p className="text-sm text-gray-500">
            Launched on: {new Date(ship.created_at ?? '').toLocaleString()}
          </p>
        </CardContent>
        <CardFooter className="bg-gray-50 border-t p-4">
          <Button asChild variant="outline">
            <Link href="/recent" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recent Ships
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
