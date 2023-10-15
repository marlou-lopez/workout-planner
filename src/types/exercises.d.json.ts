export interface Exercise {
    name:             string;
    force:            /* Force | null; */ string | null;
    level:            /* Level; */ string;
    mechanic:         /* Mechanic | null; */ string | null;
    equipment:        /* Equipment | null; */ string | null;
    primaryMuscles:   /* Muscles[]; */ string[];
    secondaryMuscles: /* Muscles[]; */ string[];
    instructions:     string[];
    category:         /* Category; */ string;
    images:           string[];
    id:               string;
}

export enum Category {
    Cardio = "cardio",
    OlympicWeightlifting = "olympic weightlifting",
    Plyometrics = "plyometrics",
    Powerlifting = "powerlifting",
    Strength = "strength",
    Stretching = "stretching",
    Strongman = "strongman",
}

export enum Equipment {
    Bands = "bands",
    Barbell = "barbell",
    BodyOnly = "body only",
    Cable = "cable",
    Dumbbell = "dumbbell",
    EZCurlBar = "e-z curl bar",
    ExerciseBall = "exercise ball",
    FoamRoll = "foam roll",
    Kettlebells = "kettlebells",
    Machine = "machine",
    MedicineBall = "medicine ball",
    Other = "other",
}

export enum Force {
    Pull = "pull",
    Push = "push",
    Static = "static",
}

export enum Level {
    Beginner = "beginner",
    Expert = "expert",
    Intermediate = "intermediate",
}

export enum Mechanic {
    Compound = "compound",
    Isolation = "isolation",
}

export enum Muscles {
    Abdominals = "abdominals",
    Abductors = "abductors",
    Adductors = "adductors",
    Biceps = "biceps",
    Calves = "calves",
    Chest = "chest",
    Forearms = "forearms",
    Glutes = "glutes",
    Hamstrings = "hamstrings",
    Lats = "lats",
    LowerBack = "lower back",
    MiddleBack = "middle back",
    Neck = "neck",
    Quadriceps = "quadriceps",
    Shoulders = "shoulders",
    Traps = "traps",
    Triceps = "triceps",
}

declare const exercises: Record<string, string>;

export default exercises;
