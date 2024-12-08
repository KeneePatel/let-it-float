import Link from 'next/link'
import { Button } from "@/components/ui/button"

async function getShipCount() {
  // TODO: Get count
}

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Let it Float</h1>
      <p className="text-xl mb-8 text-gray-600">
        {/* TODO: Get count */}
        ships have set sail into the vast ocean of anonymity.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/write">Launch a Ship</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/recent">View Recent Ships</Link>
        </Button>
      </div>
    </div>
  )
}
