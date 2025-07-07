import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME!,
      pass: process.env.MAIL_PASSWORD!,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Bralvio.io" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: [
        "raihan@clarioscope.ai",
      ],
      subject: `New Appointment Request from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Preferred Date: ${data.date}
        Preferred Time: ${data.time}

        Use Case:
        ${data.message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Demo email failed:", error);
    return NextResponse.json({ success: false, error: "Email send failed" }, { status: 500 });
  }
}
