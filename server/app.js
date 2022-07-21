require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const users = require("./models/userSchema");
const port = process.env.PORT || 8003;
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("server sstarted ");
});
const router = require("./routes/router");

app.use(router);
app.listen(port, () => {
  console.log(`Server start port number ${port}`);
});
