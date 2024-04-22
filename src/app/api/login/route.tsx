import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_NAME, NAME_TOKEN_NAME } from "@/constants/constants";

export async function GET(request: NextRequest) {
  const token = await request.nextUrl.searchParams.get("token");

  if (!token) return NextResponse.redirect(new URL("/500", request.url));

  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set(ACCESS_TOKEN_NAME, token);
  response.cookies.set(NAME_TOKEN_NAME, "token-rrss");

  return response;
}
