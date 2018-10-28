import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    fontFamily: 'IBMPlexSans-Light',
    backgroundColor: '#F6F5FA',
    borderWidth: 0.75,
    borderRadius: 4,
    fontSize: 15,
    padding: 5,
    marginVertical: 5,
    shadowOffset:{ width: 3, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    marginHorizontal: 10,
  },
  exerciseListItem: {
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  setsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerText: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 20,
  },
  separator: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'IBMPlexSans-Light',
  },
  set:{
    fontSize: 15,
    fontFamily: 'IBMPlexSans-Light',
    flexDirection: 'row',
  },
});
