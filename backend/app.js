const express = require("express");
const morgan = require("morgan");
const { connectMongo } = require("./config/db");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/partner", require("./routes/partnerRoutes"));
app.use("/api/inquiry", require("./routes/inquiryRoutes"));
app.use("/api/portfolio", require("./routes/portfolioRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

connectMongo();

module.exports = app;
