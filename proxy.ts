import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/auth/login", "/auth/register", "/auth/forgot-password", "/auth/reset-password"];
const protectedRoutes = ["/cart", "/checkout", "/orders", "/wishlist", "/account", "/settings", "/help", "/contact", "/about", "/products", "/categories", "/search", "/blog", "/posts", "/comments", "/tags"];


export default function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("token")?.value || null;
    const isAuthenticated = !!token;
    const isPublicRoute = publicRoutes.includes(pathname);
    const isProtectedRoute = protectedRoutes.some((route) => pathname === route || route.startsWith(`${route}/`));

    if (isPublicRoute && isAuthenticated) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (isProtectedRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
}