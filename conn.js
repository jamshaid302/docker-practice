const mongoose = require("mongoose");

const conn = () => {
  mongoose.connect(process.env.MONGO_URI);

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("Connected to the database");
  });
};

module.exports = conn;
