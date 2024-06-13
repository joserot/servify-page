import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_NAME } from "@/constants/constants";

export async function middleware(request: NextRequest) {
  let cookie = await request.cookies.get(ACCESS_TOKEN_NAME);

  const token = await cookie?.value;

  if (cookie && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile", "/profile-professional/:path*"],
};
