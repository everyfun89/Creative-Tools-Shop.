import connectMongo from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const db = await connectMongo();
    res.status(200).json({ message: "Connected to MongoDB!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
