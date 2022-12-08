import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const res = NextResponse.next();
  const ip = request.ip;
  const country = request.geo?.country;
  res.cookies.set("loc", [ip, country].join(","), {
    httpOnly: false,
  });
  return res;
}
