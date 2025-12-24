const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/PortfolioMessage");

const contactSchema = new mongoose.Schema({
  username: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Contact", contactSchema)
