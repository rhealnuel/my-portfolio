// /app/api/dashboard/experience/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Experience from "@/lib/models/experience";

// GET all experiences, POST new experience
export async function GET() {
  await connectToDatabase();
  const experiences = await Experience.find().sort({ _id: -1 });
  return NextResponse.json({ experiences });
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const data = await req.json();
  const experience = await Experience.create(data);
  return NextResponse.json(experience, { status: 201 });
}

// PUT and DELETE (by id): /app/api/dashboard/experience/route.ts?id=ID

export async function PUT(req: NextRequest) {
  await connectToDatabase();
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const data = await req.json();
  const updated = await Experience.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  await connectToDatabase();
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await Experience.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
