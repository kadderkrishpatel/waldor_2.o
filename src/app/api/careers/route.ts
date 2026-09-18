import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { careersSchema } from "@/src/lib/validations/careers.schema";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  pool: true,
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = careersSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message ?? "Invalid form data",
        },
        { status: 400 },
      );
    }

    const { firstName, lastName, email, subject, message } = parsed.data;

    const info = await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Careers Enquiry - ${firstName} ${lastName ?? ""}`.trim(),
      html: `
        <h2>New Careers Enquiry</h2>

        <table
          cellpadding="8"
          cellspacing="0"
          border="1"
          style="border-collapse:collapse;font-family:Arial;"
        >
          <tr>
            <td><strong>First Name</strong></td>
            <td>${escapeHtml(firstName)}</td>
          </tr>

          <tr>
            <td><strong>Last Name</strong></td>
            <td>${escapeHtml(lastName || "-")}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${escapeHtml(email)}</td>
          </tr>

          <tr>
            <td><strong>Subject</strong></td>
            <td>${escapeHtml(subject)}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${escapeHtml(message).replace(/\n/g, "<br/>")}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      response: info.response,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Message :", error.message);
      console.error("Stack :", error.stack);
    }

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Unable to send email",
      },
      {
        status: 500,
      },
    );
  }
}
