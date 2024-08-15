import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import ejs from "ejs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, code, phone, company, designation } = await req.json();

  if (!name || !email || !phone) {
    return new Response("Missing required fields", { status: 400 });
  }

  const userInfo = {
    name,
    company,
    phone: code + phone,
    email,
    designation,
  };

  const customerHTML = getHtmlContent({
    name,
    date: new Date().toLocaleString(),
    isAdmin: false,
  });

  const adminHTML = getHtmlContent({
    name: "Admin",
    date: new Date().toLocaleString(),
    isAdmin: true,
    userInfo,
  });

  const customerMailOption = {
    from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    to: email,
    subject: "Your Inquiry is In! We’ll Get Back to You Shortly 📬",
    html: customerHTML,
  };

  const adminMailOption = {
    from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    to: process.env.NEXT_PUBLIC_NODEMAILER_ADMIN_EMAIL,
    subject: "You've Got a New Customer Contact! 🕵️‍♂️",
    html: adminHTML,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail(customerMailOption);
    await transporter.sendMail(adminMailOption);
    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 400 },
    );
  }
}

const getHtmlContent = ({
  name,
  date,
  isAdmin,
  userInfo,
}: {
  name: string;
  date: string;
  isAdmin: boolean;
  userInfo?: {
    name: string;
    company: string;
    email: string;
    phone: string;
    designation: string;
  };
}) => {
  const templatePath = path.join(
    process.cwd(),
    "/src/app/api/submitForm/email-template.ejs",
  );
  const templateContent = fs.readFileSync(templatePath, "utf8");

  return ejs.render(templateContent, {
    name,
    date,
    isAdmin,
    userInfo,
  });
};
