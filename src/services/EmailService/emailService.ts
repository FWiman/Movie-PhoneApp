import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const email = process.env.EMAIL_USERNAME as string;
const password = process.env.EMAIL_PASSWORD as string;

type EmailOptions = {
  to: string;
  subject: string;
  text: string;
};

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export const sendEmail = async (options: EmailOptions) => {
  const mailOptions = {
    from: email,
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
