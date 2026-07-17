import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, treatment, message } = body;
    await transporter.verify();

    const info = await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Contact Enquiry - ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Enquiry</h2>

        <table
          cellpadding="8"
          cellspacing="0"
          border="1"
          style="border-collapse:collapse;font-family:Arial;"
        >
          <tr>
            <td><strong>First Name</strong></td>
            <td>${firstName}</td>
          </tr>

          <tr>
            <td><strong>Last Name</strong></td>
            <td>${lastName}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone || "-"}</td>
          </tr>

          <tr>
            <td><strong>Treatment</strong></td>
            <td>${treatment || "-"}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${message?.replace(/\n/g, "<br/>")}</td>
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
