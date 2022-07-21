const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  condition: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const item = new mongoose.model("item", itemSchema);
module.exports = item;
