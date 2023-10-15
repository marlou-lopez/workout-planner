import { Exercise } from "@/types/exercises.json"
import { Card, CardHeader } from "../ui/card"

export default function ExerciseCard({ name }: Exercise) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col">
          <p className="">{name}</p>
        </div>
      </CardHeader>
    </Card>
  )
}
