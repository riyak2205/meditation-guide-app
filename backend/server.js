const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// ✅ Loads the JSON file (make sure spelling is correct: exercises.json)
const exercises = require("./data/exercises.json");

app.use(cors());

app.get("/api/exercises", (req, res) => {
  res.json(exercises);
});

app.get("/api/exercises/:id", (req, res) => {
  const id = req.params.id;
  const exercise = exercises.find((e) => e.id === id);
  if (exercise) {
    res.json(exercise);
  } else {
    res.status(404).send({ message: "Exercise not found" });
  }
});

// ✅ Server will now log to console
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
