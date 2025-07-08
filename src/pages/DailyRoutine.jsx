import { useEffect, useState } from "react";
import "./ExerciseList.css";

function DailyRoutine() {
  const [routine, setRoutine] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/exercises")
      .then((res) => res.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setRoutine(shuffled.slice(0, 5)); // pick 5 random exercises
      })
      .catch((err) => console.error("Error fetching routine:", err));
  }, []);

  return (
    <div className="exercise-list">
      <h2>📅 Your Daily Routine</h2>
      {routine.map((ex) => (
        <div key={ex.id} className="exercise-entry">
          <h3>{ex.name} <span style={{ fontSize: "0.9rem", color: "#555" }}>({ex.type})</span></h3>
          {ex.image && (
            <img
              src={ex.image}
              alt={ex.name}
              className="exercise-image"
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "1rem",
              }}
            />
          )}
          <p><strong>Description:</strong> {ex.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DailyRoutine;
