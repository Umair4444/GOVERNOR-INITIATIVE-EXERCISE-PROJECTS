import { NextRequest, NextResponse } from "next/server";

const UsersList: { username: string; email: string }[] = [];

export function GET() {
  return NextResponse.json({ UsersList });
}
export async function POST(request: NextRequest) {
  const body = await request.json(); //in
  UsersList.push(body);
  console.log("post req", body);

  return NextResponse.json(body);
}
