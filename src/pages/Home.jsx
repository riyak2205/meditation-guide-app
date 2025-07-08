import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Meditation Guide</h1>
        <div className="home-buttons">
          <button onClick={() => navigate("/exercises/meditation")}>
            🧘‍♀️ Meditation Exercises
          </button>
          <button onClick={() => navigate("/exercises/breathing")}>
            🌬️ Breathing Exercises
          </button>
          <button onClick={() => navigate("/daily-routine")}>
            📅 Daily Routine
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
