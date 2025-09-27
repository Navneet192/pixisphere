const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: String,
  date: Date,
  budget: Number,
  city: String,
  referenceImage: String,
  status: {
    type: String,
    enum: ["new", "responded", "booked", "closed"],
    default: "new",
  },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "Partner" }],
});

module.exports = mongoose.model("Inquiry", inquirySchema);
