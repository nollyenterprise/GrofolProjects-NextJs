import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, company, service, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // true if using 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose email
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.CONTACT_EMAIL,
        subject: `New Contact Form Submission: ${service || "General Inquiry"}`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone || "N/A"}
            Company: ${company || "N/A"}
            Service: ${service || "N/A"}
            Message: ${message}
        `,
        html: `
            <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px;">
                <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <h1 style="color: #1e3a8a; font-size: 24px; margin-bottom: 20px;">📩 New Contact Form Submission</h1>
                    <p style="font-size: 16px; color: #333;">You have received a new message from your website contact form. Details are below:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; color: #555;">Name:</td>
                        <td style="padding: 8px; color: #111;">${name}</td>
                    </tr>
                    <tr style="background-color: #f0f0f0;">
                        <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
                        <td style="padding: 8px; color: #111;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; color: #555;">Phone:</td>
                        <td style="padding: 8px; color: #111;">${phone || "N/A"}</td>
                    </tr>
                    <tr style="background-color: #f0f0f0;">
                        <td style="padding: 8px; font-weight: bold; color: #555;">Company:</td>
                        <td style="padding: 8px; color: #111;">${company || "N/A"}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; color: #555;">Service:</td>
                        <td style="padding: 8px; color: #111;">${service || "N/A"}</td>
                    </tr>
                    <tr style="background-color: #f0f0f0;">
                        <td style="padding: 8px; font-weight: bold; color: #555;">Message:</td>
                        <td style="padding: 8px; color: #111;">${message.replace(/\n/g, "<br>")}</td>
                    </tr>
                    </table>

                    <p style="margin-top: 30px; font-size: 14px; color: #777;">
                    This email was generated automatically from your website contact form.
                    </p>
                </div>
            </div>
        `,
    };


    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
