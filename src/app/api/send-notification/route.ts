import { NextRequest, NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, email, phone, message, treatment, preferredDate, preferredTime } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const isAppointment = type === "appointment";

    const subject = isAppointment
      ? `New Appointment Request — ${name}`
      : `New Contact Form Submission — ${name}`;

    const htmlContent = isAppointment
      ? `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Treatment:</strong> ${treatment || "Not specified"}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || "Not specified"}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime || "Not specified"}</p>
        <p><strong>Message:</strong> ${message || "None"}</p>
      `
      : `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;

    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = htmlContent;
    sendSmtpEmail.sender = { email: process.env.BREVO_SENDER_EMAIL!, name: "DENTISTREE Website" };
    sendSmtpEmail.to = [{ email: process.env.CLINIC_NOTIFY_EMAIL! }];
    if (email) {
      sendSmtpEmail.replyTo = { email, name };
    }

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Brevo send error:", err);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}