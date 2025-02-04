import { NextRequest, NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({});
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("body", body);

  return NextResponse.json(body);
}
