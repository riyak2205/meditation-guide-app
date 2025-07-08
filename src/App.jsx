import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseList from "./pages/ExerciseList";
import DailyRoutine from "./pages/DailyRoutine"; // ✅ Import it

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:type" element={<ExerciseList />} />
        <Route path="/daily-routine" element={<DailyRoutine />} /> {/* ✅ New Route */}
      </Routes>
    </Router>
  );
}

export default App;
