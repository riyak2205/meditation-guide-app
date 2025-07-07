import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseList from "./pages/ExerciseList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:type" element={<ExerciseList />} />
      </Routes>
    </Router>
  );
}

export default App;
