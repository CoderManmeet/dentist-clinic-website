import { NextRequest, NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

const client = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

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

    await client.transactionalEmails.sendTransacEmail({
      sender: { email: process.env.BREVO_SENDER_EMAIL!, name: "DENTISTREE Website" },
      to: [{ email: process.env.CLINIC_NOTIFY_EMAIL! }],
      replyTo: email ? { email, name } : undefined,
      subject,
      htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Brevo send error:", err);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}