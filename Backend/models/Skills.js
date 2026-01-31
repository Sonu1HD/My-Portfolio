const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String, // image path or URL
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
