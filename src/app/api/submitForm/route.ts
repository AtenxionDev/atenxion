import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import ejs from "ejs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { customerName, email, code, phone, company, designation } =
    await req.json();

  if (!customerName || !email || !phone) {
    return new Response("Missing required fields", { status: 400 });
  }

  const userInfo = {
    customerName,
    company,
    phone: code + phone,
    email,
    designation,
  };

  const customerHTML = getHtmlContent({
    customerName,
    date: new Date().toLocaleString(),
    isAdmin: false,
  });

  const adminHTML = getHtmlContent({
    customerName: "Admin",
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
  customerName,
  date,
  isAdmin,
  userInfo,
}: {
  customerName: string;
  date: string;
  isAdmin: boolean;
  userInfo?: {
    customerName: string;
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
    customerName,
    date,
    isAdmin,
    userInfo,
  });
};
