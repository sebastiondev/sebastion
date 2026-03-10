import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter: max 5 requests per IP per hour
const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 }
    );
  }

  // Origin check — reject requests from unexpected origins
  const origin = req.headers.get("origin") || "";
  const allowedOrigins = [
    "https://sebastion.dev",
    "https://www.sebastion.dev",
  ];
  if (
    process.env.NODE_ENV === "production" &&
    origin &&
    !allowedOrigins.includes(origin)
  ) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Newsletter service not configured." },
      { status: 500 }
    );
  }

  const res = await fetch("https://api.buttondown.com/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email }),
  });

  if (res.status === 201) {
    return NextResponse.json({ ok: true });
  }

  if (res.status === 409) {
    // Already subscribed — still show success to the user
    return NextResponse.json({ ok: true });
  }

  const body = await res.text();
  console.error(`Buttondown error ${res.status}: ${body}`);
  return NextResponse.json(
    { error: "Subscription failed. Try again later." },
    { status: 502 }
  );
}
