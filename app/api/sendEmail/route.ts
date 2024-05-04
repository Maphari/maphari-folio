// import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

let errorMessage: string | unknown;
let successMessage: boolean | string;

interface IMailOptions {
  from?: string;
  to?: string;
  subject?: string;
  html?: any;
}

const transpoter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> =
  nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

transpoter.verify((err, success) => {
  if (err) errorMessage = err;
  else successMessage = success;
});

export async function POST(req: NextRequest,  res:NextRequest) {

const body =  await req.json()

  const { email, subject, message } = body;

  const mailOptions: IMailOptions = {
    from: process.env.USER,
    to: process.env.USER,
    subject: `${email} has sent you an email from your portfolio`,
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 18px; border-radius: 10px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);">
        <h3 style="color: #333333; ">${subject}</h3>
        <p style="color: #666666; font-size: 13px">Hello Mr Maphari phumudzo</p>
        <p style="color: #666666; font-size: 13px">${message}</p>
        <p style="color: #666666; font-size: 13px">Warm regards</p>
        <p style="color: #666666; font-size: 13px">${email}</p>
    </div>
    </div>`,
  };

  try {
    const info = await transpoter.sendMail(mailOptions);
    if (successMessage && info.response) {
      return new NextResponse(JSON.stringify({ message: "Email sent succsessfully!😉😉", messageID: info.messageId }))
    } else {
      return new NextResponse(JSON.stringify({ error: "Failed to sent email try again later😭😭" }))
    }
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Internal server error!😭😭"  }))
  }
}
