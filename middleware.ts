import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const res = NextResponse.next();
  const ip = request.ip ?? request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for');
  
  if(ip){
    res.cookies.set("user-ip", ip, {
      httpOnly: false,
    });
  }
  
  return res;
}
