import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE_NAME = "site-auth";
const AUTH_COOKIE_VALUE = "authenticated";

export function middleware(request: NextRequest) {
  // Allow all routes in development
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow mockups routes, static assets, and auth API
  if (
    pathname.startsWith("/mockups") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const authCookie = request.cookies.get(AUTH_COOKIE_NAME);
  if (authCookie?.value === AUTH_COOKIE_VALUE) {
    return NextResponse.next();
  }

  // Return password page for unauthenticated users
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Password Required</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #0F172A;
      color: #fff;
    }
    .container {
      text-align: center;
      padding: 2rem;
      max-width: 400px;
      width: 100%;
    }
    h1 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    p {
      color: #94a3b8;
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    input[type="password"] {
      padding: 0.75rem 1rem;
      border: 1px solid #334155;
      border-radius: 6px;
      background: #1e293b;
      color: #fff;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.2s;
    }
    input[type="password"]:focus {
      border-color: #0EA5E9;
    }
    button {
      padding: 0.75rem 1rem;
      background: #0EA5E9;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover {
      background: #0284c7;
    }
    .error {
      color: #f87171;
      font-size: 0.875rem;
      display: none;
    }
    .error.show {
      display: block;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Password Required</h1>
    <p>This site is currently under development.</p>
    <form id="authForm">
      <input type="password" id="password" placeholder="Enter password" autocomplete="current-password" required />
      <p class="error" id="error">Incorrect password</p>
      <button type="submit">Enter Site</button>
    </form>
  </div>
  <script>
    document.getElementById('authForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const password = document.getElementById('password').value;
      const errorEl = document.getElementById('error');

      try {
        const res = await fetch('/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password })
        });

        if (res.ok) {
          window.location.reload();
        } else {
          errorEl.classList.add('show');
          document.getElementById('password').value = '';
        }
      } catch (err) {
        errorEl.classList.add('show');
      }
    });
  </script>
</body>
</html>`,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
