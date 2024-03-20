// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const email = process.env.EMAIL_USERNAME as string;
// const password = process.env.EMAIL_PASSWORD as string;
// const clientId = process.env.CLIENT_ID as string;
// const clientSecret = process.env.CLIENT_SECRET as string;

// type EmailOptions = {
//   to: string;
//   subject: string;
//   text: string;
// };

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: email,
//     pass: password,
//     clientId: clientId,
//     clientSecret: clientSecret,
//   },
// });

// export const sendEmail = async (options: EmailOptions) => {
//   const mailOptions = {
//     from: email,
//     to: options.to,
//     subject: options.subject,
//     text: options.text,
//   };

//   await transporter.sendMail(mailOptions);
// };

// module.exports = { sendEmail };
