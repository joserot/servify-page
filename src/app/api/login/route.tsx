import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_NAME, NAME_TOKEN_NAME } from "@/constants/constants";
import { getCookies } from "next-client-cookies/server";

export async function GET(request: NextRequest) {
  const token = await request.nextUrl.searchParams.get("token");
  const cookies = getCookies();
  const location = await cookies.get("last_location");
  const service = await cookies.get("last_service");
  const id = await cookies.get("last_id");

  if (!token) return NextResponse.redirect(new URL("/500", request.url));

  if (location && service && id) {
    const response = NextResponse.redirect(
      new URL(`/${location}/${service}/${id}`, request.url)
    );

    response.cookies.set(ACCESS_TOKEN_NAME, token);
    response.cookies.set(NAME_TOKEN_NAME, "token-rrss");

    return response;
  } else {
    const response = NextResponse.redirect(new URL("/", request.url));

    response.cookies.set(ACCESS_TOKEN_NAME, token);
    response.cookies.set(NAME_TOKEN_NAME, "token-rrss");

    return response;
  }
}
