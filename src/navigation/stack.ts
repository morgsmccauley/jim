import { createStackNavigator } from 'react-navigation';

import Workouts from '../Screens/Workouts/Workouts';
import WorkoutDetails from '../Screens/WorkoutDetails/WorkoutDetails';

import AddExerciseModal from '../Components/AddExerciseModal/AddExerciseModal';

const mainStack = createStackNavigator(
  {
    Workouts,
    WorkoutDetails,
  },
  {
    initialRouteName: 'Workouts',
  },
);

/* tslint:disable:object-shorthand-properties-first */
const rootStack = createStackNavigator(
  {
    Main: {
      screen: mainStack,
    },
    AddExerciseModal,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
  },
);

export default rootStack;
