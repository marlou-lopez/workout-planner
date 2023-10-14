import WorkoutCard, { WorkoutCardProps } from "@/components/internal/workout-card";
import { ModeToggle } from "@/components/mode-toggle";

const TEST_WORKOUTS: WorkoutCardProps[] = [
  {
    name: "Arms Strong"
  },
  {
    name: "Elmer's Glute"
  },
]

function CurrentDayWorkouts() {
  return (
    <ul className="space-y-2">
      {TEST_WORKOUTS.map((workout, index) => {
        return (
          <li key={index} >
            <WorkoutCard {...workout} />
          </li>
        )
      })}
    </ul>
  )
}

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl py-4 font-extrabold">
          Home
        </h1>
        <ModeToggle />
      </div>
      <p className="text-sm font-semibold py-6">Let's get it done today, King.</p>

      <CurrentDayWorkouts />
    </main>
  )
}
