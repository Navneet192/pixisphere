const Inquiry = require("../models/Inquiry");

exports.createInquiry = async (req, res) => {
  const inquiry = await Inquiry.create({ clientId: req.user.id, ...req.body });
  res.json(inquiry);
};

exports.getLeads = async (req, res) => {
  const leads = await Inquiry.find({ assignedTo: req.user.id });
  res.json(leads);
};
