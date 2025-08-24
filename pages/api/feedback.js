// pages/api/feedback.js
import connectMongo from "../../lib/mongodb";
import Feedback from "../../models/Feedback";

export default async function handler(req, res) {
  await connectMongo();

  if (req.method === "GET") {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    return res.status(200).json(feedbacks);
  }

  if (req.method === "POST") {
    const { name, message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const newFeedback = await Feedback.create({ name, message });
    return res.status(201).json(newFeedback);
  }

  return res.status(405).end();
}
