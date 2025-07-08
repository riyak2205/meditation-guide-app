import { useEffect, useState } from "react";
import "./ExerciseList.css"; // using the same styles

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

      <div className="routine-intro">
        <p>
          Establishing a daily exercise routine isn't just about physical movement — it's about creating space in your day to reconnect with yourself. In a world that moves fast and demands constant attention, dedicating even 15–30 minutes to mindful practices can offer immense long-term benefits.
        </p>
        <p>
          A structured routine promotes discipline, balance, and clarity. It creates a rhythm that your mind and body can rely on, whether you're starting your day with intention or winding down with calm. Integrating short sessions of focused breathing, grounding body scans, or guided visualization doesn't require hours — only your presence and a willingness to pause.
        </p>
        <p>
          Consistency is more powerful than intensity. It’s okay to start small — one or two exercises a day is enough to bring about change. With time, these little moments of calm can transform how you handle stress, approach challenges, and experience rest. A good daily routine becomes your anchor, helping you feel grounded even on chaotic days.
        </p>
        <p>
          Below is your suggested routine for today — five thoughtfully chosen practices that aim to refresh your mind, reset your energy, and bring peace into your daily rhythm. Let them guide you through a journey of stillness and strength. Make this a non-negotiable act of self-care — because you deserve it. ✨
        </p>
      </div>

      {routine.map((ex) => (
        <div key={ex.id} className="exercise-entry">
          <h3>
            {ex.name}{" "}
            <span style={{ fontSize: "0.9rem", color: "#555" }}>({ex.type})</span>
          </h3>

          {ex.image && (
            <img
              src={ex.image}
              alt={ex.name}
              className="exercise-image"
              style={{
                width: "100%",
                maxHeight: "350px",
                objectFit: "contain",
                borderRadius: "10px",
                marginBottom: "1rem",
              }}
            />
          )}

          <p>
            <strong>Description:</strong> {ex.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DailyRoutine;
