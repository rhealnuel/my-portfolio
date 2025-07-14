import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose a beautiful email
    const mailOptions = {
      from: `"${body.name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact from ${body.name}`,
      replyTo: body.email,
      text: `
New contact form submission:

Name: ${body.name}
Email: ${body.email}

Message:
${body.message}
      `,
      html: `
        <div style="max-width:520px;margin:auto;font-family:sans-serif;background:#f6f8fa;padding:32px;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.05);">
          <h2 style="color:#111;margin-top:0">📥 New Contact Form Submission</h2>
          <div style="margin-bottom:24px;">
            <div style="margin-bottom:12px;">
              <strong style="display:inline-block;width:90px;color:#222;">Name:</strong>
              <span style="color:#222;">${body.name}</span>
            </div>
            <div style="margin-bottom:12px;">
              <strong style="display:inline-block;width:90px;color:#222;">Email:</strong>
              <a href="mailto:${body.email}" style="color:#3b82f6;text-decoration:none;">${body.email}</a>
            </div>
            <div>
              <strong style="display:inline-block;width:90px;color:#222;">Message:</strong>
              <div style="color:#222;white-space:pre-line;padding:14px 18px;background:#f3f4f6;border-radius:6px;margin-top:6px;">
                ${body.message.replace(/\n/g, "<br/>")}
              </div>
            </div>
          </div>
          <div style="font-size:13px;color:#8e9297;">
            <em>Sent via your portfolio website contact form · ${new Date().toLocaleString()}</em>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to submit contact form." }, { status: 500 });
  }
}
