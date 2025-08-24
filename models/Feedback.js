const FeedbackSchema = new mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  email: { type: String, default: "" },
  rating: { type: Number, min: 1, max: 5, required: true },
  message: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});
