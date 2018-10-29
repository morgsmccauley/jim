interface IWorkout {
  id: string;
  name: string;
  day: string;
  date: string;
}

export const workoutActions = {
  addWorkout: (workout: IWorkout) => ({ type: 'ADD_WORKOUT', payload: workout }),
  updateWorkoutName: (name: string, id: string) => ({ type: 'UPDATE_WORKOUT_NAME', payload: { name, id } }),
};
