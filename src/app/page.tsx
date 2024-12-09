import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-136px)] bg-gradient-to-b from-blue-100 to-white">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <h1 className="text-4xl font-bold text-blue-800">Let it float</h1>
          <p className="text-xl text-gray-600 text-center">
            Set your thoughts free in the vast ocean of anonymity.
          </p>
          <div className="flex flex-col space-y-2 w-full">
            <Button asChild className="w-full">
              <Link href="/write">Launch a Ship</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/recent">View Recent Ships</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
