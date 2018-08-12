import R from 'ramda';
import React from 'react';
import idGen from '../../Utils/Id';
import styles from './WorkoutDetailsStyles';
import Exercise, { IExercise } from '../../Components/Exercise/Exercise';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const EXERCISE_ID_PREFIX = 'exercise';

interface IWorkoutDetailsState {
  exercises: IExercise[];
}

interface IWorkoutDetailsProps {

}

class WorkoutDetails extends React.Component<IWorkoutDetailsProps, IWorkoutDetailsState> {
  state = {
    exercises: [],
  };

  renderExerciseItem = (exercise: IExercise) => (
    <Exercise />
  )

  renderExerciseList = (exercises: IExercise[]) => (
    <FlatList
      data={exercises}
      renderItem={({ item: exercise }) => this.renderExerciseItem(exercise)}
      keyExtractor={exercise => exercise.id}
    />
  )

  addExercise = () => {
    const { exercises } = this.state;
    this.setState({
      exercises: R.append(
        {
          id: idGen(EXERCISE_ID_PREFIX),
          name: 'Placeholder exercise',
          sets: [{ weight: 80, reps: 8 }],
        },
        exercises,
      ),
    });
  }

  render () {
    const { exercises } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.workoutName}>
            Placeholder
          </Text>
          <Text style={styles.workoutDate}>
            7th August 2018
          </Text>
          <Text style={styles.workoutTime}>
            11:30am - 1:00pm
          </Text>
        </View>
        <View style={styles.exerciseListContainer}>
          {this.renderExerciseList(exercises)}
        </View>
        <View style={styles.addExerciseButtonContainer}>
          <TouchableOpacity
            style={styles.addExerciseButton}
            onPress={() => this.addExercise()}
          >
            <Text style={styles.addExerciseSymbol}>
              +
            </Text>
            <Text style={styles.addExerciseText}>
              Add exercise
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default WorkoutDetails;
