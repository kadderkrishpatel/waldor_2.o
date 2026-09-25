import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { careersSchema } from "@/src/lib/validations/careers.schema";
import { saveCareersSubmission } from "@/src/lib/db";

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

    // Save to database
    await saveCareersSubmission({
      firstName,
      lastName: lastName || null,
      email,
      subject,
      message,
    });

    const info = await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `💼 New Careers Enquiry - ${firstName} ${lastName ?? ""}`.trim(),
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background: #f5f5f5; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
              .header { background: linear-gradient(135deg, #3D4844 0%, #2d2d2d 100%); color: #E2D1BA; padding: 40px 20px; text-align: center; }
              .header h1 { margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px; }
              .header p { margin: 10px 0 0 0; font-size: 14px; opacity: 0.9; }
              .content { padding: 40px; }
              .field { margin-bottom: 25px; }
              .label { color: #C6A26D; font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; display: block; }
              .value { color: #333; font-size: 15px; line-height: 1.6; padding: 12px 15px; background: #f9f9f9; border-left: 3px solid #C6A26D; }
              .message-box { color: #333; font-size: 14px; line-height: 1.8; padding: 15px 15px; background: #fafaf8; border: 1px solid #E2D1BA; border-radius: 4px; }
              .divider { border: none; border-top: 1px solid #E2D1BA; margin: 30px 0; }
              .footer { background: #3D4844; color: #E2D1BA; padding: 20px; text-align: center; font-size: 12px; }
              .footer a { color: #C6A26D; text-decoration: none; }
              .subject-badge { display: inline-block; background: #C6A26D; color: white; padding: 8px 16px; border-radius: 4px; font-size: 13px; font-weight: 600; }
              .emoji { font-size: 20px; margin-right: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>💼 NEW CAREERS ENQUIRY</h1>
                <p>WALDOR CLINIC</p>
              </div>

              <div class="content">
                <div style="color: #666; margin-bottom: 30px; font-size: 14px;">
                  An exciting careers opportunity enquiry has been received! Check the details below:
                </div>

                <div class="field">
                  <span class="label"><span class="emoji">👤</span>Candidate Name</span>
                  <div class="value">${escapeHtml(firstName)} ${escapeHtml(lastName || "")}</div>
                </div>

                <div class="field">
                  <span class="label"><span class="emoji">📧</span>Email Address</span>
                  <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #C6A26D; text-decoration: none;">${escapeHtml(email)}</a></div>
                </div>

                <div class="field">
                  <span class="label"><span class="emoji">💼</span>Position / Subject</span>
                  <div style="margin-top: 8px;">
                    <span class="subject-badge">${escapeHtml(subject)}</span>
                  </div>
                </div>

                <hr class="divider">

                <div class="field">
                  <span class="label"><span class="emoji">📝</span>About the Candidate</span>
                  <div class="message-box">${escapeHtml(message).replace(/\n/g, "<br/>")}</div>
                </div>

                <div style="background: #F0EBE5; padding: 15px; border-radius: 4px; margin-top: 30px; color: #666; font-size: 13px;">
                  <strong style="color: #3D4844;">Next Steps:</strong><br>
                  Review this enquiry and reach out to the candidate at your earliest convenience to discuss this opportunity.
                </div>
              </div>

              <div class="footer">
                <p style="margin: 0; font-size: 13px;">
                  <strong>WALDOR CLINIC</strong><br>
                  35 Great Portland Street, London W1W 8QQ<br>
                  <a href="tel:+447464745114">+44 7464 745114</a> | <a href="mailto:info@waldorclinic.com">info@waldorclinic.com</a>
                </p>
              </div>
            </div>
          </body>
        </html>
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
