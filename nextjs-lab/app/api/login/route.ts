import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username } = await req.json();

  const response = NextResponse.json(
    { message: "You have logged in!" },
    { status: 200 },
  );

  response.cookies.set({
    name: "gallery-user",
    value: username,
    httpOnly: true,
    maxAge: 10 * 60,
  });

  return response;
}
