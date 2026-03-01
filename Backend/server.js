const express = require('express');
const cors = require('cors');
const dataModel = require('./models/data')
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("./models/Admin");
const Project = require("./models/Project");
const Skill = require("./models/Skills");
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://sonuhalder-portfolio-dxpy.vercel.app",
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

app.get("/admin/dashboard", verifyAdmin, (req, res) => {
res.json({
message: "Welcome Admin 👑",
adminId: req.adminId,
});
});

app.get('/', (req, res) => {
  res.send("Backend running")

});

// mongoose connection

mongoose
  .connect(process.env.MONGO_URL)
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

app.get("/admin/messages", verifyAdmin, async (req, res) => {
  try {
    const messages = await dataModel.find().sort({_id: -1 });
    res.json(messages)
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages"})
  }
})

//Admin Login API

app.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;

  // 1. Check admin exists
  const admin = await Admin.findOne({ email });
  if (!admin) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // 2. Compare password with hash
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // 3. Create JWT token
  const token = jwt.sign(
    { id: admin._id },
    process.env.JWT_SECRET, // later move to .env
    { expiresIn: "1h" }
  );

  // 4. Send token
  res.json({ token });
});

app.get("/admin/profile", verifyAdmin, async (req, res) => {
  try {
    const admin = await Admin.findById(req.adminId).select("email");

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.json(admin); // { email: "your@email.com" }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Public – get projects
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

// ADMIN – get all projects
app.get("/admin/projects", verifyAdmin, async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch {
    res.status(500).json({ message: "Failed to fetch admin projects" });
  }
});

// ADMIN – add project
app.post("/admin/projects", verifyAdmin, async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch {
    res.status(500).json({ message: "Failed to add project" });
  }
});

// ADMIN – update project
app.put("/admin/projects/:id", verifyAdmin, async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch {
    res.status(500).json({ message: "Failed to update project" });
  }
});

// ADMIN – delete project
app.delete("/admin/projects/:id", verifyAdmin, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch {
    res.status(500).json({ message: "Failed to delete project" });
  }
});


// Public - get Skills
app.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: 1 });
    res.json(skills);
  } catch (error) {
    console.error("Skills fetch error:", error); // 👈 ADD THIS
    res.status(500).json({ message: "Failed to fetch skills" });
  }
});

// ADMIN - get all Skills
app.get("/admin/skills", verifyAdmin, async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch admin skills" });
  }
});

app.post("/admin/skills", verifyAdmin, async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: "Failed to add skill" });
  }
});

app.delete("/admin/skills/:id", verifyAdmin, async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: "Skill deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete skill" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});