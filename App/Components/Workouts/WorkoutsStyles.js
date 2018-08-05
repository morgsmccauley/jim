import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'column',
  },
  date: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  addItemButton: {

  },
  addSymbol: {
    fontSize: 40,
  },
  itemContainer: {

  },
  item: {
    alignItems: 'flex-start',
    borderRadius: 4,
    borderWidth: 0.75,
    borderColor: '#d6d7da',
    padding: 10,
    margin: 5,
  },
  itemGroup: {
    fontSize: 25,
  },
  itemDate: {
    fontSize: 20,
  },
});
