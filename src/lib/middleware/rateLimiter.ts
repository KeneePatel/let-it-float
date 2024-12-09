import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number, lastReset: number }>();

export default function rateLimitMiddleware(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const ip = req.headers.get("x-forwarded-for") ?? 'unknown';
    const limit = 100;
    const timeWindow = 1000 * 60; // 1 minute

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, {
        count: 0,
        lastReset: Date.now()
      });
    }

    const { count, lastReset } = rateLimitMap.get(ip)!;

    if (Date.now() - lastReset > timeWindow) {
      rateLimitMap.set(ip, {
        count: 0,
        lastReset: Date.now()
      });
    }

    if (count >= limit) {
      return new NextResponse('Too many requests', { status: 429 });
    }

    rateLimitMap.set(ip, {
      count: count + 1,
      lastReset: Date.now()
    });

    return handler(req);
  }
}
