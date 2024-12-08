'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import type { Database } from '@/types/database.types'

type MessageWithContent = Database["public"]["Views"]["message_with_content"]["Row"]

export default function RecentPage() {
  const [ships, setShips] = useState<MessageWithContent[]>([])
  const router = useRouter()

  async function fetchRecentShips() {
    const res = await fetch("/api/messages");

    if (!res.ok) {
      console.error(`Error fetching messages: ${res.statusText}`);
      return
    }

    const messages: MessageWithContent[] = await res.json();
    setShips(messages)
  }

  useEffect(() => {
    fetchRecentShips()
  }, [])

  if (ships.length === 0) {
    return <div>No ships found</div>
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-blue-100 to-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Recent Ships</h1>
      <div className="flex flex-wrap m-2 mb-4 p-2 w-full max-w-3xl gap-4">
        {ships.map((ship) => (
          <Card key={ship.id} className='w-64 h-64 hover:shadow-lg hover:border-2 hover:border-blue-800' onClick={() => router.push(`/message/${ship.id}`)}>
            <CardContent className="flex flex-col h-full p-4">
              <p className="h-full text-gray-700 p-2">{ship.content}</p>
              <p className="text-sm text-gray-500 text-right mt-2">
                {new Date(ship.created_at ?? '').toLocaleString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2">
        <Button
          asChild
          variant="outline"
          disabled={true}
        >
        </Button>
        <Button
          asChild
          variant="outline"
          disabled={true}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}
