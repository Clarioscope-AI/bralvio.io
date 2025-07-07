import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // Use true for port 465
    auth: {
      user: process.env.MAIL_USERNAME!,
      pass: process.env.MAIL_PASSWORD!,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Bralvio.io" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: [
        "george@clarioscope.ai",
        "raihan@clarioscope.ai",
        ],
      subject: `New Project Submission from Bralvio: ${data.projectTitle}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Project Title: ${data.projectTitle}
        Budget: ${data.budget}
        Timeline: ${data.timeline}

        Idea Description:
        ${data.description}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}
