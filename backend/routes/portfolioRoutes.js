const router = require("express").Router();
const { protect } = require("../middlewares/auth");
const {
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");

router.post("/", protect(["partner"]), addPortfolio);
router.put("/:id", protect(["partner"]), updatePortfolio);
router.delete("/:id", protect(["partner"]), deletePortfolio);

module.exports = router;
