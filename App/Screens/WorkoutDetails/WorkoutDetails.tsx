// import AddExerciseModal from '../../Components/AddExerciseModal/AddExerciseModal';
import R from 'ramda';
import React from 'react';
import idGen from '../../Utils/Id';
import styles from './WorkoutDetailsStyles';
import Exercise, { IExercise, MassUnit } from '../../Components/Exercise/Exercise';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const exerciseIdGen = idGen('exercise');
const setIdGen = idGen('set');

interface IWorkoutDetailsState {
  exercises: IExercise[];
  isAddModalVisible: boolean;
}

class WorkoutDetails extends React.Component<{}, IWorkoutDetailsState> {
  state = {
    exercises: [],
    isAddModalVisible: false,
  };

  renderExerciseItem = (exercise: IExercise) => (
    <Exercise name={exercise.name} sets={exercise.sets} />
  )

  renderExerciseList = (exercises: IExercise[]) => (
    <FlatList
      testID="WorkoutDetails_exercise-list"
      data={exercises}
      renderItem={({ item: exercise }) => this.renderExerciseItem(exercise)}
      keyExtractor={exercise => exercise.id}
    />
  )

  createInitialSets = (sets: number, reps: number) => R.pipe(
    R.repeat({}),
    R.map(
      set => ({ reps, weight: 0, id: setIdGen() }),
    ),
  )(sets)

  addExercise ({ name, sets, reps }: { name: string, sets: number, reps: number }) {
    this.setState(({ exercises }) => ({
      exercises: R.append(
        {
          name,
          id: exerciseIdGen(),
          sets: this.createInitialSets(sets, reps),
          massUnit: MassUnit.Kg,
        },
        exercises,
      ),
    }));
  }

  toggleModal (viewState: 'open' | 'closed') {
    this.setState({ isAddModalVisible: !!(viewState === 'open') });
  }

  handleAddExercise = (partialExercise: { name: string, sets: number, reps: number }) => {
    this.addExercise(partialExercise);
    this.toggleModal('closed');
  }

  render () {
    const { exercises } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text testID="WorkoutDetails_name" style={styles.workoutName}>
            Placeholder
          </Text>
          <Text testID="WorkoutDetails_date" style={styles.workoutDate}>
            7th August 2018
          </Text>
          <Text testID="WorkoutDetails_time" style={styles.workoutTime}>
            11:30am - 1:00pm
          </Text>
        </View>
        <View style={styles.exerciseListContainer}>
          {this.renderExerciseList(exercises)}
        </View>
        <View style={styles.addExerciseButtonContainer}>
          <TouchableOpacity
            testID="WorkoutDetails_add-exercise-button"
            style={styles.addExerciseButton}
            onPress={() => this.toggleModal('open')}
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

// commenting because cant be mocked in test
// <AddExerciseModal
//   isVisible={this.state.isAddModalVisible}
//   closeModal={() => this.setState({ isAddModalVisible: false })}
//   onCompleteCallback={this.handleAddExercise}
// />
