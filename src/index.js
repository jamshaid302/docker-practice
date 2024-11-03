const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const routes = require("./routes/index");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Api is ready");
});

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
