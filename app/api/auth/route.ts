import { NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "site-auth";
const AUTH_COOKIE_VALUE = "authenticated";

export async function POST(request: Request) {
  const { password } = await request.json();
  const sitePassword = process.env.SITE_PASSWORD;

  if (!sitePassword) {
    console.error("SITE_PASSWORD environment variable is not set");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  if (password === sitePassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set(AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
