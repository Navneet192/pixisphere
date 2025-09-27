const Partner = require("../models/Partner");

exports.submitDetails = async (req, res) => {
  const partner = await Partner.create({ userId: req.user.id, ...req.body });
  res.json(partner);
};

exports.getPending = async (req, res) => {
  const pending = await Partner.find({ status: "pending" });
  res.json(pending);
};

exports.verifyPartner = async (req, res) => {
  const { status, comment } = req.body;
  const partner = await Partner.findByIdAndUpdate(
    req.params.id,
    { status, adminComment: comment },
    { new: true }
  );
  res.json(partner);
};
