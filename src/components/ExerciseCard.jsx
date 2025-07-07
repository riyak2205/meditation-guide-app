import "./ExerciseCard.css";

export default function ExerciseCard({ exercise }) {
  return (
    <div className="card">
      <img src={exercise.image} alt={exercise.name} />
      <h3>{exercise.name}</h3>
    </div>
  );
}
