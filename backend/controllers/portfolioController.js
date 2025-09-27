const Portfolio = require("../models/Portfolio");

exports.addPortfolio = async (req, res) => {
  const entry = await Portfolio.create({ partnerId: req.user.id, ...req.body });
  res.json(entry);
};

exports.updatePortfolio = async (req, res) => {
  const entry = await Portfolio.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(entry);
};

exports.deletePortfolio = async (req, res) => {
  await Portfolio.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
