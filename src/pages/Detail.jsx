import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/exercises/${id}`)
      .then((res) => res.json())
      .then(setExercise);
  }, [id]);

  if (!exercise) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{exercise.name}</h1>
      <img src={exercise.image} alt={exercise.name} className="rounded-lg w-full max-w-2xl mb-4" />
      <p className="mb-4">{exercise.description}</p>
      <h2 className="text-xl font-semibold">Benefits</h2>
      <ul className="list-disc ml-6 mb-4">
        {exercise.benefits.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <h2 className="text-xl font-semibold">Posture</h2>
      <p className="mb-4">{exercise.posture}</p>
      <h2 className="text-xl font-semibold">Steps</h2>
      <ol className="list-decimal ml-6">
        {exercise.steps.map((s, i) => <li key={i}>{s}</li>)}
      </ol>
    </div>
  );
}

export default Detail;
