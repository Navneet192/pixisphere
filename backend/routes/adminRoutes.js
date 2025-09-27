const router = require("express").Router();
const { protect } = require("../middlewares/auth");
const { stats } = require("../controllers/adminController");

router.get("/stats", protect(["admin"]), stats);

module.exports = router;
