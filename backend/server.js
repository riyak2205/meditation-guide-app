const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

// Default route for sanity check
app.get("/", (req, res) => {
  res.send("🧘‍♀️ Meditation Guide Backend is Running");
});

// GET all exercises or filter by ?type=meditation/breathing
app.get("/api/exercises", (req, res) => {
  const type = req.query.type;

  fs.readFile(path.join(__dirname, "data", "exercises.json"), "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON:", err);
      return res.status(500).send("Failed to read data");
    }

    try {
      const exercises = JSON.parse(data);
      const filtered = type
        ? exercises.filter((ex) => ex.type?.toLowerCase() === type.toLowerCase())
        : exercises;

      res.json(filtered);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      res.status(500).send("Invalid JSON format");
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
