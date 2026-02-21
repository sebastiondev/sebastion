import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
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
