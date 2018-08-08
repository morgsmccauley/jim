import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  addItemButton: {
  },
  addSymbol: {
    fontSize: 40,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  date: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  item: {
    alignItems: 'flex-start',
    borderColor: '#d6d7da',
    borderRadius: 4,
    borderWidth: 0.75,
    margin: 5,
    padding: 10,
  },
  itemContainer: {

  },
  itemDate: {
    fontSize: 20,
  },
  itemName: {
    fontSize: 25,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});
