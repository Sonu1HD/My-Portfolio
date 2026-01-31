const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String, // image path or URL
      required: true,
    },
    live: {
      type: String,
    },
    github: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
