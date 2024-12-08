import Link from 'next/link'
import { Ship } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Ship className="h-8 w-8 text-blue-600" />
            <Link href="/" className="ml-2 text-xl font-bold text-gray-800">
              Let it Float
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/write" className="text-gray-600 hover:text-gray-900">
                  Write
                </Link>
              </li>
              <li>
                <Link href="/recent" className="text-gray-600 hover:text-gray-900">
                  Recent
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
