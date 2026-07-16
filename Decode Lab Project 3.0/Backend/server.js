// ===============================
// Load Environment Variables
// ===============================
require("dotenv").config();

// ===============================
// Import Packages
// ===============================
const express = require("express");
const cors = require("cors");

// ===============================
// Import Database Connection
// ===============================
const connectDB = require("./config/db");

// ===============================
// Import Routes
// ===============================
const studentRoutes = require("./routes/studentRoutes");

// ===============================
// Create Express App
// ===============================
const app = express();

// ===============================
// Connect MongoDB
// ===============================
connectDB();

// ===============================
// Middleware
// ===============================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// Default Route
// ===============================
app.get("/", (req, res) => {
    res.status(200).send("🎉 Student Management API is Running...");
});

// ===============================
// Student API Routes
// ===============================
app.use("/api/students", studentRoutes);

// ===============================
// 404 Route Handler
// ===============================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// ===============================
// Start Server
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});