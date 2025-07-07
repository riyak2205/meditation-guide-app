import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ExerciseList.css";

function ExerciseList() {
  const { type } = useParams();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/exercises?type=${type}`)
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setLoading(false);
      });
  }, [type]);

  return (
    <div className="exercise-list">
      <h2>{type === "meditation" ? "Meditation" : "Breathing"} Exercises</h2>

      {loading ? (
        <p>Loading...</p>
      ) : exercises.length === 0 ? (
        <p>No exercises found.</p>
      ) : (
        exercises.map((ex) => (
          <div key={ex.id} className="exercise-entry">
            <h3>{ex.name}</h3>

            {ex.youtubeUrl && (
              <iframe
                width="100%"
                height="300"
                src={ex.youtubeUrl}
                title={ex.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}

            <p><strong>Description:</strong> {ex.description}</p>
            <p><strong>Posture:</strong> {ex.posture}</p>
            <p><strong>Benefits:</strong></p>
            <ul>
              {ex.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <p><strong>Steps:</strong></p>
            <ol>
              {ex.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
        ))
      )}
    </div>
  );
}

export default ExerciseList;
