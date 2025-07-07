export default function DailyPlan({ exercises }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {exercises.map((exercise) => (
        <div key={exercise.id} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
          <h4 className="font-bold">{exercise.name}</h4>
          <p className="text-sm text-gray-600">{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}
