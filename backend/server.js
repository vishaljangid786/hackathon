// Import required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,"./uploads")
  },
filename: function(req,file,cb){
    crypto.randomBytes(12,(err,bytes)=>{
      const uniqueCode = bytes.toString('hex');
      const originalName = file.originalname;
      const fileName = originalName.split('.')[0] + '-' + uniqueCode + '.' + originalName.split('.')[1];
      cb(null,fileName)
    })
  }
})

const upload = multer({storage:storage})

// Constants
const PORT = 5000;
const JWT_SECRET = "aksdjfhalksjdfhkav912839qabslkh91k3bnskadjbbnalksdfkn[laq";

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for cross-origin requests

// MongoDB connection URL
const mongoUrl =
  "mongodb+srv://vishaljangid80550786:hack786@hackathon.o6cbb.mongodb.net/?retryWrites=true&w=majority&appName=hackathon";

// MongoDB Connection
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// User Model
require("./userDetails.js");
const User = mongoose.model("UserInfo");

// Team Details Model
require("./TeamDetails.js");
const TeamDetails = mongoose.model("TeamDetails");

// User Signup Endpoint
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ status: "User already registered" });
    }

    // Encrypt the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    await User.create({ name, email, password: encryptedPassword });
    res.status(201).json({ status: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ status: "error", error: error.message });
  }
});


// Team Registration Endpoint// Team Registration Endpoint
app.post("/register", async (req, res) => {
  const {
    teamName,
    teamLeader,
    email,
    whatsapp,
    collegeName,
    githubAccount,
    field,
    TeamMembers,
    year
  } = req.body;

  try {
    // Check if the team already exists
    const oldTeam = await TeamDetails.findOne({ email });
    if (oldTeam) {
      return res.status(400).json({ status: "Team already registered" });
    }

    // Create a new team
    const newTeam = await TeamDetails.create({
      teamName,
      teamLeader,
      email,
      whatsapp,
      TeamMembers,
      collegeName,
      githubAccount,
      field,
      year,
    });

    res.status(201).json({ status: "Team registered successfully", team: newTeam });
    // If you want to redirect after a successful registration, you can do it on the frontend
    // res.redirect('/payment'); <-- REMOVE this
  } catch (error) {
    console.error("Error registering team:", error);
    if (!res.headersSent) {
      res.status(500).json({ status: "error", error: error.message });
    }
  }
});


app.post("/screenshot", upload.single("screenshot"), (req, res) => {
  console.log(req.file);
  res.status(200).json({ message: "Screenshot received" });
});

// User Login Endpoint
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare provided password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ status: "error", error: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({
        status: "ok",
        token,
        user: { id: user._id, email: user.email, name: user.name },
      });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ status: "error", error: error.message });
  }
});


// Fetch Teams Endpoint (for Admin)
app.get("/teams", async (req, res) => {
  try {
    const teams = await TeamDetails.find();
    res.status(200).json(teams);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ status: "error", error: error.message });
  }
});

const authenticateToken = (req, res, next) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) return res.sendStatus(401); // No token, unauthorized

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user; // Attach user info to request
    next();
  });
};

// Protect the /admin endpoint
app.get("/admin", authenticateToken, async (req, res) => {
  try {
    const teams = await TeamDetails.find();
    res.status(200).json(teams);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ status: "error", error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
