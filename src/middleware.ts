import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_NAME } from "@/constants/constants";

import * as jose from "jose";

export async function middleware(request: NextRequest) {
  let cookie = await request.cookies.get(ACCESS_TOKEN_NAME);

  const token = await cookie?.value;
  const pathname = await request.nextUrl.pathname;

  if (!token || !cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const user: User | null = await jose.decodeJwt(token);

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!user.roles.includes("admin") && pathname.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    !user.roles.includes("professional") &&
    pathname.includes("/profile-professional")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile", "/profile-professional/:path*"],
};
