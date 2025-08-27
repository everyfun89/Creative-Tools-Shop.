// models/User.js
import mongoose from "mongoose";

// Schema definitie
const UserSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Check of model al bestaat (Next.js hot reload probleem vermijden)
export default mongoose.models.User || mongoose.model("User", UserSchema);
