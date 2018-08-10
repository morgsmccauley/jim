const nanoId = require('nanoid/non-secure');
import R from 'ramda';
import React from 'react';
import styles from './WorkoutDetailsScreenStyles';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Exercise {
  id: string;
  name: string;
  sets: string;
  reps: string;
  // weight: string;
  // weightUnit: string;
  // description: string;
  // notes: string;
  // completionTime: number;
}

class WorkoutDetails extends React.Component {
  state = {
    exercises: [],
  };

  renderExerciseItem = (exercise: Exercise) => (
    <Text style={styles.exerciseListItem}>
      {exercise.name}
    </Text>
  )

  renderExerciseList = (exercises: Exercise[]) => (
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
          id: nanoId(),
          name: 'Placeholder exercise',
          sets: '',
          reps: '',
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
