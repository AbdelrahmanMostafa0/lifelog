import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/home"];
const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
];

export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Check DevTools → Application → Cookies after a successful login.
  const isAuthenticated = req.cookies.has("accessToken");

  if (protectedRoutes.some((r) => path.startsWith(r)) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (authRoutes.some((r) => path.startsWith(r)) && isAuthenticated) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
