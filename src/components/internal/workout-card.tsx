import { Card, CardHeader } from "../ui/card"

export type WorkoutCardProps = {
  name: string;
  schedule?: string;
}

export default function WorkoutCard({name, schedule}: WorkoutCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          {schedule && (
            <p className="text-xs text-slate-400">{schedule}</p>
          )}
        </div>
      </CardHeader>
    </Card>
  )
}
