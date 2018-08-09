// import nanoId from 'nanoid/non-secure';
import R from 'ramda';
import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './WorkoutsScreenStyles';
import { getDate, getDay } from '../../Utils/Date';

const nanoId = require('nanoid/non-secure');

interface Workout {
  id: string;
  name: string;
  day: string;
  date: string;
}

class WorkoutsScreen extends React.Component {
  state = {
    workouts: [],
    day: getDay(),
    date: getDate(),
  };

  addNewWorkout = (currentDate: { day: string, date: string }) => {
    const workouts = R.prepend(
      {
        id: nanoId(),
        name: 'Workout',
        ...currentDate,
      },
      this.state.workouts,
    );

    this.setState({
      workouts,
    });
  }

  renderWorkoutListItem = (workout: Workout) => (
    <View key={workout.id} style={styles.workoutListItem}>
      <TextInput
        style={styles.workoutName}
        value={workout.name}
        clearTextOnFocus
      />
      <View>
        <Text style={styles.workoutDate}>
          {`${workout.day} - ${workout.date}`}
        </Text>
      </View>
    </View>
  )

  renderWorkoutList = (workouts: Workout[]): any[] => (
    workouts.map(workout => (
      this.renderWorkoutListItem(workout)))
  )

  render() {
    const { workouts, day, date } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>
              {day}
            </Text>
            <Text style={styles.date}>
              {date}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.addWorkoutButton}
            onPress={() => this.addNewWorkout({ date, day })}
          >
            <Text style={styles.addSymbol}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.workoutListContainer}>
          {this.renderWorkoutList(workouts)}
        </View>
      </View>
    );
  }
}

export default WorkoutsScreen;
