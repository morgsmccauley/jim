import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' ,
  },
  container: {
    backgroundColor: '#F6F5FA',
    padding: 20,
    borderRadius: 5,
  },
  header: {
    fontSize: 30,
    fontFamily: 'IBMPlexSans-Medium',
    marginBottom: 10,
  },
  setsRepsContainer: {
    flexDirection: 'row',
  },
  nameInput: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 0.6,
    marginVertical: 5,
  },
  setsInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 0.6,
    paddingRight: 5,
  },
  repsInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 0.6,
    paddingLeft: 5,
  },
  addButton: {
    alignSelf: 'center',
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 0.6,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
