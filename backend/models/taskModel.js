const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  fees: { type: Number },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
 },
  { versionKey: false } 
);

module.exports = mongoose.model("Task", TaskSchema);
