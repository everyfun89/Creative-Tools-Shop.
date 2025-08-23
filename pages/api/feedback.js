// pages/api/feedback.js
import connectMongo from "../../lib/mongodb";
import Feedback from "../../models/Feedback";

export default async function handler(req, res) {
  await connectMongo();
  if (req.method === "GET") {
    const items = await Feedback.find({}).sort({ createdAt: -1 }).lean();
    return res.status(200).json(items);
  }
  if (req.method === "POST") {
    const { name, email, rating, message } = req.body || {};
    if (!rating || !message) return res.status(400).json({ error: "Rating and message required" });
    try {
      const f = await Feedback.create({ name, email, rating, message });
      return res.status(201).json(f);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }
  res.status(405).end();
}
