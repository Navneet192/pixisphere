const mongoose = require("mongoose");
const { Pool } = require("pg");

const connectMongo = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected");
};

const pgPool = new Pool({
  connectionString: process.env.PG_URI,
});

module.exports = { connectMongo, pgPool };
