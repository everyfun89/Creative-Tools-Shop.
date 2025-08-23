// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
