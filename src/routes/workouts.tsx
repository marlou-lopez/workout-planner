import WorkoutCard, { WorkoutCardProps } from "@/components/internal/workout-card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const TEST_WORKOUTS: WorkoutCardProps[] = [
  {
    name: "Arms Strong"
  },
  {
    name: "Elmer's Glute"
  },
  {
    name: "Legs Benedict"
  },
  {
    name: "Boulder Shoulder"
  }
]

export default function Workouts() {
  return (
    <main>
      <h1 className="text-4xl py-4 font-extrabold">
        Workouts
      </h1>

      <section>
        <div className="w-full flex justify-end">
          <Button variant="outline" size="sm" className="space-x-1">
            <PlusIcon className="h-[1rem] w-[1rem]" />
            <p className="font-semibold">
              Add workout
            </p>
          </Button>
        </div>
        
        <ul className="py-4 space-y-2">
          {TEST_WORKOUTS.map((workout, index) => {
            return (
              <li key={index} >
                <WorkoutCard {...workout} />
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
