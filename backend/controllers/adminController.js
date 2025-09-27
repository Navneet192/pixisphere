const User = require("../models/Users");
const Partner = require("../models/Partner");
const Inquiry = require("../models/Inquiry");

exports.stats = async (req, res) => {
  const totalClients = await User.countDocuments({ role: "client" });
  const totalPartners = await User.countDocuments({ role: "partner" });
  const pendingVerifications = await Partner.countDocuments({
    status: "pending",
  });
  const totalInquiries = await Inquiry.countDocuments();
  res.json({
    totalClients,
    totalPartners,
    pendingVerifications,
    totalInquiries,
  });
};
