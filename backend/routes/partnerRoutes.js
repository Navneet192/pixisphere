const router = require("express").Router();
const { protect } = require("../middlewares/auth");
const {
  submitDetails,
  getPending,
  verifyPartner,
} = require("../controllers/partnerController");

router.post("/submit", protect(["partner"]), submitDetails);
router.get("/pending", protect(["admin"]), getPending);
router.put("/verify/:id", protect(["admin"]), verifyPartner);

module.exports = router;
