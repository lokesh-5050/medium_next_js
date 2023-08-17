import { NextRequest, NextResponse } from "next/server";
import {isLoggedIn} from '@/helpers/helper';
import { connect } from "./config/dbConfig";
connect();
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
//   return NextResponse.redirect(new URL("/home", request.url));



  const isPublicPath = path == "/login" || path === "/" || path === '/signup';

  const token = request.cookies.get("token")?.value || "";

  isLoggedIn({req:request});

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (isPublicPath && token) {
    // return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup"],
};
