const express = require("express");
const app = express();
require("dotenv").config();
const conn = require("./conn");
conn();
const UserModal = require("./userModel");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    const users = await UserModal.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const user = new UserModal(req?.body);
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 7000");
});
