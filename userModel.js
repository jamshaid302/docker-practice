const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  { timestamps: true }
);

const model = mongoose.model("User", schema);

module.exports = model;
