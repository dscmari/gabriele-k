import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.endsWith(".php")) {
    return new NextResponse(null, { status: 404 });
  }
}

export const config = {
  matcher: "/:path*.php",
};