// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";

const IMAGEKIT_UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file = data.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
    const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;

    if (!privateKey || !publicKey || !urlEndpoint) {
      return NextResponse.json(
        { error: "ImageKit environment variables are not configured" },
        { status: 500 }
      );
    }

    // Preserve the original extension while creating a unique filename.
    const originalName = file.name || "upload";
    const extension = originalName.includes(".")
      ? originalName.substring(originalName.lastIndexOf("."))
      : "";

    const baseName = originalName
      .replace(/\.[^/.]+$/, "")
      .replace(/[^a-zA-Z0-9-_]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 80);

    const fileName = `${baseName || "upload"}-${Date.now()}${extension}`;

    // ImageKit expects multipart/form-data.
    const uploadData = new FormData();

    uploadData.append("file", file);
    uploadData.append("fileName", fileName);
    uploadData.append("folder", "/portfolio_uploads");

    // Public key is not required for server-side authentication,
    // but including it is harmless and keeps the configuration explicit.
    uploadData.append("publicKey", publicKey);

    // ImageKit server-side authentication uses Basic Auth:
    // username = private key
    // password = empty
    const authorization = `Basic ${Buffer.from(
      `${privateKey}:`
    ).toString("base64")}`;

    const uploadResponse = await fetch(IMAGEKIT_UPLOAD_URL, {
      method: "POST",
      headers: {
        Authorization: authorization,
      },
      body: uploadData,
    });

    const uploadResult = await uploadResponse.json();

    if (!uploadResponse.ok) {
      console.error("ImageKit upload error:", uploadResult);

      return NextResponse.json(
        {
          error:
            uploadResult?.message ||
            uploadResult?.help ||
            "ImageKit upload failed",
        },
        { status: uploadResponse.status || 500 }
      );
    }

    // Keep the exact same response shape your existing code expects.
    return NextResponse.json({
      url: uploadResult.url,
    });
  } catch (error) {
    console.error("Upload error:", error);

    return NextResponse.json(
      { error: "Image upload failed" },
      { status: 500 }
    );
  }
}