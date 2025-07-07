import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ExerciseList.css";

function ExerciseList() {
  const { type } = useParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/exercises?type=${type}`)
      .then((res) => res.json())
      .then(setExercises);
  }, [type]);

  return (
    <div className="exercise-list">
      <h2 className="exercise-title">{type === "meditation" ? "Meditation" : "Breathing"} Exercises</h2>
      <div className="exercise-grid">
        {exercises.map((ex) => (
          <div className="exercise-card" key={ex.id}>
            <h3>{ex.name}</h3>
            <p>{ex.description}</p>
            <iframe
              width="100%"
              height="200"
              src={ex.youtubeUrl}
              title={ex.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseList;
