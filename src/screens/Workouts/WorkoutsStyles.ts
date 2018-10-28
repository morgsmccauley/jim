import { StyleSheet } from 'react-native';
import applicationStyles from '../../themes/applicationStyles';

export default StyleSheet.create({
  addWorkoutButton: {
    marginRight: 20,
  },
  addSymbol: {
    fontSize: 60,
    fontFamily: 'IBMPlexSans-Light',
  },
  container: {
    ...applicationStyles.container,
  },
  date: {
    fontSize: 30,
    fontFamily: 'IBMPlexSans-Medium',
  },
  dateContainer: {
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  workoutListItem: {
    alignItems: 'flex-start',
    borderColor: '#d6d7da',
    borderRadius: 4,
    borderWidth: 0.75,
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 10,
    backgroundColor: '#F6F5FA',
    shadowOffset:{ width: 3, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  workoutListContainer: {

  },
  workoutDate: {
    fontSize: 20,
    fontFamily: 'IBMPlexSans-Light',
  },
  workoutName: {
    fontSize: 25,
    fontFamily: 'IBMPlexSans-Medium',
  },
});
