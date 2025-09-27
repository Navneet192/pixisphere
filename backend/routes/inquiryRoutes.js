const router = require("express").Router();
const { protect } = require("../middlewares/auth");
const { createInquiry, getLeads } = require("../controllers/inquiryController");

router.post("/", protect(["client"]), createInquiry);
router.get("/leads", protect(["partner"]), getLeads);

module.exports = router;
