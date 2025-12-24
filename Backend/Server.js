const express = require('express');
const cors = require('cors');
const dataModel = require('./models/data')
const mongoose = require("mongoose");
const { log } = require('console');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173", // React frontend
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send("Backend running")
    
});

// mongoose connection

mongoose
  .connect("mongodb://localhost:27017/PortfolioMessage")
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("MongoDB error ❌", err))

// contact page 

app.post("/contact", async (req, res) => {
  try {
    const { username, email, message } = req.body

    if (!username || !email || !message) {
      return res.status(400).json({ message: "All fields required" })
    }

    console.log("Received contact:", { username, email, message })

    const savedData = await dataModel.create({
      username,
      email,
      message,
    })

    console.log("Saved to MongoDB ✅", savedData)

    res.status(200).json({
      success: true,
      message: "Message received successfully",
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" })
  }
})


app.listen(3000, () => {
    console.log(`server running at http://localhost:3000`);

});