import R from 'ramda';
import React from 'react';
import idGen from '../../Utils/id/id';
import styles from './WorkoutsStyles';
import { NavigationScreenProp } from 'react-navigation';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { getDate, getDay } from '../../Utils/date/date';

const workoutIdGen = idGen('workout');

interface IWorkout {
  id: string;
  name: string;
  day: string;
  date: string;
}

interface IWorkoutState {
  workouts: IWorkout[];
  day: string;
  date: string;
}

interface IWorkoutProps {
  navigation: NavigationScreenProp<any, any>;
}

class WorkoutsScreen extends React.Component<IWorkoutProps, IWorkoutState> {
  static navigationOptions = {
    title: 'Workouts',
  };

  state = {
    workouts: [],
    day: getDay(),
    date: getDate(),
  };

  addNewWorkout = (currentDate: { day: string, date: string }) => {
    const workouts = R.prepend(
      {
        id: workoutIdGen(),
        name: 'Workout',
        ...currentDate,
      },
      this.state.workouts,
    );

    this.setState({
      workouts,
    });
  }

  renderWorkoutListItem = (workout: IWorkout) => (
    <TouchableOpacity
      key={workout.id}
      style={styles.workoutListItem}
      onPress={() => this.props.navigation.navigate('WorkoutDetails')}
    >
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
    </TouchableOpacity>
  )

  renderWorkoutList = (workouts: IWorkout[], day: string, date: string) => (
    <View style={styles.workoutListContainer}>
      <FlatList
        data={workouts}
        renderItem={({ item: workout }) => this.renderWorkoutListItem(workout)}
        keyExtractor={workout => workout.id}
        ListHeaderComponent={() => this.renderHeader(day, date)}
      />
    </View>
  )

  renderHeader = (day: string, date: string) => (
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
  )

  render() {
    const { workouts, day, date } = this.state;

    return (
      <View style={styles.container}>
        {this.renderWorkoutList(workouts, day, date)}
      </View>
    );
  }
}

export default WorkoutsScreen;
