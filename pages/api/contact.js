// pages/api/contact.js
import connectMongo from "../../lib/mongodb";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

const MessageSchema = new mongoose.Schema({
  name: String, email: String, message: String, createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { name, email, message } = req.body || {};
  if (!email || !message) return res.status(400).json({ error: "Email and message required" });

  await connectMongo();
  try {
    await Message.create({ name, email, message });

    // optional: send email if SMTP env configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      });
      await transporter.sendMail({
        from: `"CreativeTools Contact" <${process.env.SMTP_USER}>`,
        to: "mamiemoema@gmail.com",
        subject: `Contact form message from ${email}`,
        text: `${name || "No name"} (${email}) wrote:\n\n${message}`
      });
    }

    return res.status(201).json({ message: "Saved" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
