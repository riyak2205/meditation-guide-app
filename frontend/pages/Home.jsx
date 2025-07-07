import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExerciseCard from "../components/ExerciseCard";
import DailyPlan from "../components/DailyPlan";
import "./Home.css";

function Home() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/exercises")
      .then((res) => res.json())
      .then(setExercises);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Meditation & Breathing Exercises</h1>
      <div className="grid">
        {exercises.map((exercise) => (
          <Link to={`/exercise/${exercise.id}`} key={exercise.id}>
            <ExerciseCard exercise={exercise} />
          </Link>
        ))}
      </div>
      <DailyPlan exercises={exercises.slice(0, 3)} />
    </div>
  );
}

export default Home;
