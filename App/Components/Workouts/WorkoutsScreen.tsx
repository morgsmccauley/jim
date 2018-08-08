import moment from 'moment';
import nanoId from 'nanoid';
import R from 'ramda';
import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './WorkoutsScreenStyles';

interface Workout {
  id: string;
  name: string;
  day: string;
  date: string;
}

interface State {
  items: [Workout];
}
class Workouts extends React.Component {
  state = {
    items: [],
  };

  getDate = () => ({
    date: moment().format('Do MMMM YYYY'),
    day: moment().format('dddd'),
  })

  addNewItem = (newItem: { day: string, date: string }) => {
    const { items } = this.state;

    this.setState({
      items: R.prepend(
        {
          id: nanoId(),
          ...newItem,
        },
        items,
      ),
    });
  }

  renderItem = ({ id, day, date }: Workout) => (
    <View key={id} style={styles.item}>
      <TextInput
        style={styles.itemName}
        value="Workout"
        clearTextOnFocus
      />
      <View>
        <Text style={styles.itemDate}>
          {`${day} - ${date}`}
        </Text>
      </View>
    </View>
  )

  renderItemList = (items: Workout[]): any[] => (
    items.map(item => (
      this.renderItem(item)))
  )

  render() {
    const { items } = this.state;
    const { day, date } = this.getDate();

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
            style={styles.addItemButton}
            onPress={() => this.addNewItem({ date, day })}
          >
            <Text style={styles.addSymbol}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          {this.renderItemList(items)}
        </View>
      </View>
    );
  }
}

export default Workouts;
