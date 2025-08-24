import connectMongo from "../../lib/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  await connectMongo();

  try {
    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) return res.status(400).json({ error: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email: email.toLowerCase(), password: hashed });

    return res.status(201).json({ message: "User created", userId: user._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
