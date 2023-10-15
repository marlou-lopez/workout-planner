import defaultExercises from "@/assets/exercises.json";
import ExerciseCard from "@/components/internal/exercise-card";
import { Exercise } from "@/types/exercises.json";

const groupByFirstLetter = (exercises: Exercise[]) => {
  // exercises is already sorted alphabetically
  return exercises.reduce(((exerciseGroup: Record<string, Exercise[]>, exercise) => {
    let firstLetter = exercise.name.charAt(0)
    // Check if character is a letter
    if (firstLetter.toLowerCase() === firstLetter.toUpperCase()) firstLetter = '-';

    if (!exerciseGroup[firstLetter]) exerciseGroup[firstLetter] = [];

    exerciseGroup[firstLetter].push(exercise);

    return exerciseGroup;
  }), {})
}

export default function Exercises() {
  const groupedExercises = groupByFirstLetter(defaultExercises);
  return (
    <main>
      <h1 className="text-4xl py-4 font-extrabold">
        Exercises
      </h1>
      <ul className="space-y-4">
        {Object.entries(groupedExercises).map(([letter, exercises]) => {
          return (
            <li key={letter}>
              <p className="text-sm font-bold mb-1">{letter}</p>
              <ul className="space-y-2">
                {exercises.map((exercise) => {
                  return (
                    <li key={exercise.id}> 
                      <ExerciseCard {...exercise} />
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
