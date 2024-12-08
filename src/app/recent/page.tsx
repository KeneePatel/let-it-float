import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import type { Database } from '@/types/database.types'

const ITEMS_PER_PAGE = 10

type Message = Database["public"]["Tables"]["message"]["Row"]
type MessageContent = Database["public"]["Tables"]["messagecontent"]["Row"]

async function getRecentShips(page: number = 1) {
  // TODO: Get recent ships
  const messages: Message[] = [
    {
      id: "1",
      created_at: new Date().toISOString(),
      last_viewed_at: null,
      status: "active",
    },
    {
      id: "2",
      created_at: new Date().toISOString(),
      last_viewed_at: null,
      status: "active",
    }
  ]
  return { ships: messages, totalCount: 0 }
}

export default async function RecentPage({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  const page = parseInt(searchParams.page) || 1
  const { ships, totalCount } = await getRecentShips(page)
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-blue-100 to-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Recent Ships</h1>
      <div className="flex flex-wrap m-2 mb-4 p-2 w-full max-w-3xl gap-4">
        {ships.map((ship) => (
          <Card key={ship.id} className='w-64 h-64 hover:shadow-lg hover:border-2 hover:border-blue-800'>
            <CardContent className="flex flex-col h-full p-4">
              <p className="h-full text-gray-700 p-2">{"content"}</p>
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
          disabled={page === 1}
        >
          <Link href={`/recent?page=${page - 1}`} aria-label="Previous page">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <Button
          asChild
          variant="outline"
          disabled={page === totalPages}
        >
          <Link href={`/recent?page=${page + 1}`} aria-label="Next page">
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}
