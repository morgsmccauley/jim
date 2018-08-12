import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E2DFED',
    // flex: 1,
  },
  header: {
    paddingTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  workoutName: {
    fontSize: 35,
    fontFamily: 'IBMPlexSans-Medium',
  },
  workoutDate: {
    fontSize: 20,
    fontFamily: 'IBMPlexSans-Light',
  },
  workoutTime: {
    fontSize: 20,
    fontFamily: 'IBMPlexSans-Light',
  },
  exerciseListContainer: {
    marginTop: 20,
  },
  exerciseListItem: {
    fontFamily: 'IBMPlexSans-Light',
    backgroundColor: '#F6F5FA',
    borderWidth: 0.75,
    borderRadius: 4,
    paddingHorizontal: 60,
    paddingVertical: 15,
    marginVertical: 5,
    fontSize: 15,
  },
  addExerciseButtonContainer: {
    bottom: 0,
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
  },
  addExerciseButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.75,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  addExerciseSymbol: {
    fontSize: 30,
    fontFamily: 'IBMPlexSans-Light',
  },
  addExerciseText: {
    fontSize: 20,
    fontFamily: 'IBMPlexSans-Light',
    paddingLeft: 10,
  },
});
