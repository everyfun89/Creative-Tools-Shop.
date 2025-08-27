// pages/api/register.js
import connectMongo from "../../lib/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, password } = req.body || {};
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await connectMongo();

    const existingUser = await User.findOne({ email: email.toLowerCase() }).lean();
    if (existingUser) return res.status(400).json({ error: "Email already in use" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    return res.status(201).json({ message: "Account successfully created", userId: newUser._id });
  } catch (err) {
    console.error("Register API error:", err);

    if (err.code === 11000) return res.status(400).json({ error: "Email already in use" });

    return res.status(500).json({ error: "Server error, please try again" });
  }
}
