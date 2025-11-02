import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      fullName,
      email,
      phone,
      company,
      serviceType,
      projectLocation,
      timeline,
      budget,
      description,
    } = data;

    // Basic validation
    if (!fullName || !email || !description) {
      return NextResponse.json(
        { error: 'Full Name, Email, and Project Description are required.' },
        { status: 400 }
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // true if 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // HTML email template
    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Quote Request: ${serviceType || 'General Inquiry'}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Company: ${company || 'N/A'}
        Service: ${serviceType || 'N/A'}
        Location: ${projectLocation || 'N/A'}
        Timeline: ${timeline || 'N/A'}
        Budget: ${budget || 'N/A'}
        Description: ${description}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <h1 style="color: #1e3a8a; font-size: 24px; margin-bottom: 20px;">📩 New Quote Request</h1>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding:8px;font-weight:bold;color:#555;">Full Name:</td><td style="padding:8px;color:#111;">${fullName}</td></tr>
              <tr style="background-color:#f0f0f0;"><td style="padding:8px;font-weight:bold;color:#555;">Email:</td><td style="padding:8px;color:#111;">${email}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#555;">Phone:</td><td style="padding:8px;color:#111;">${phone || 'N/A'}</td></tr>
              <tr style="background-color:#f0f0f0;"><td style="padding:8px;font-weight:bold;color:#555;">Company:</td><td style="padding:8px;color:#111;">${company || 'N/A'}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#555;">Service:</td><td style="padding:8px;color:#111;">${serviceType || 'N/A'}</td></tr>
              <tr style="background-color:#f0f0f0;"><td style="padding:8px;font-weight:bold;color:#555;">Location:</td><td style="padding:8px;color:#111;">${projectLocation || 'N/A'}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#555;">Timeline:</td><td style="padding:8px;color:#111;">${timeline || 'N/A'}</td></tr>
              <tr style="background-color:#f0f0f0;"><td style="padding:8px;font-weight:bold;color:#555;">Budget:</td><td style="padding:8px;color:#111;">${budget || 'N/A'}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#555;">Description:</td><td style="padding:8px;color:#111;">${description.replace(/\n/g, '<br>')}</td></tr>
            </table>
            <p style="margin-top:30px;font-size:14px;color:#777;">This email was generated automatically from your website quote form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Quote request sent successfully!' });
  } catch (err) {
    console.error('Quote submission error:', err);
    return NextResponse.json({ error: 'Failed to send quote request.' }, { status: 500 });
  }
}
