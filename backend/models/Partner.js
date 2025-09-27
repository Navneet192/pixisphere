const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  serviceDetails: String,
  documents: String,
  portfolio: [String],
  status: {
    type: String,
    enum: ["pending", "verified", "rejected"],
    default: "pending",
  },
  adminComment: String,
});

module.exports = mongoose.model("Partner", partnerSchema);
