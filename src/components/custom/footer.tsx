import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-2 text-gray-600">
          <span>Made with</span>
          <Heart className="h-5 w-5 text-red-500" />
          <span>by Kenny</span>
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Let it Float. No rights reserved.
        </div>
      </div>
    </footer>
  )
}
