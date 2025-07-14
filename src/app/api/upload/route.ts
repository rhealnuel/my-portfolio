// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file = data.get("file") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // Convert file to base64 string for Cloudinary
  const arrayBuffer = await file.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");
  const mimeType = file.type;
  const dataUri = `data:${mimeType};base64,${base64}`;

  try {
    const uploadRes = await cloudinary.uploader.upload(dataUri, {
      folder: "portfolio_uploads", // Customize folder as needed
    });
    return NextResponse.json({ url: uploadRes.secure_url });
  } catch (error) {
    return NextResponse.json({ error: "Cloudinary upload failed" }, { status: 500 });
  }
}
