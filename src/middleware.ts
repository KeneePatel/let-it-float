import rateLimitMiddleware from '@/lib/middleware/rateLimiter';
import { NextRequest, NextResponse } from 'next/server'
 
// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/api/:function*',
}

export default function middleware(req: NextRequest) {
  const handler = async (req: NextRequest) => {
    return NextResponse.next();
  }
  return rateLimitMiddleware(handler)(req);
}
