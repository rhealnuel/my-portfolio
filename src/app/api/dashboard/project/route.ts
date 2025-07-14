// /app/api/dashboard/project/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Project from "@/lib/models/project"

// GET all projects, POST new project
export async function GET() {
  await connectToDatabase();
  const projects = await Project.find().sort({ _id: -1 });
  return NextResponse.json({ projects });
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const data = await req.json();
  const project = await Project.create(data);
  return NextResponse.json(project, { status: 201 });
}

// PUT and DELETE (by id): /app/api/dashboard/project/route.ts?id=ID

export async function PUT(req: NextRequest) {
  await connectToDatabase();
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const data = await req.json();
  const updated = await Project.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  await connectToDatabase();
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await Project.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
