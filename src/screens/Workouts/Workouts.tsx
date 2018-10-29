import { connect } from 'react-redux';
import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import idGen from '../../utils/id/id';
import styles from './WorkoutsStyles';
import {
  getDate,
  getDay,
} from '../../utils/date/date';
import { workoutActions } from '../../actions';

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
  addWorkout: (object: IWorkout) => void;
  updateWorkoutName: (name: string, id: string) => void;
  workouts: IWorkout[];
}

class WorkoutsScreen extends React.Component<IWorkoutProps, IWorkoutState> {
  static navigationOptions = {
    title: 'Workouts',
  };

  day = getDay();
  date = getDate();

  addNewWorkout = (currentDate: { day: string, date: string }) => {
    this.props.addWorkout({ day: this.day, date: this.date, id: workoutIdGen(), name: 'Workout' });
  }

  updateWorkoutForId = (id: string) => (e: any) => {
    this.props.updateWorkoutName(e.nativeEvent.text, id);
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
        onBlur={this.updateWorkoutForId(workout.id)}
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
    const { workouts } = this.props;

    return (
      <View style={styles.container}>
        {this.renderWorkoutList(workouts, this.day, this.date)}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  workouts: state,
});

const mapDispatchToProps = {
  addWorkout: workoutActions.addWorkout,
  updateWorkoutName: workoutActions.updateWorkoutName,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsScreen);
