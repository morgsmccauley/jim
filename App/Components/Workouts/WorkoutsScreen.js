// @flow

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import styles from './WorkoutsStyles';

type Props = {}
type State = {
  items: Array<Object>,
}
class Workouts extends React.Component<Props, State> {
  state = {
    items: [],
  }

  getDate = () => ({
    day: moment().format('dddd'),
    date: moment().format('Do MMMM YYYY'),
  });

  addNewItem = (item: { group: string, day: string, date: string }) => {
    const { items } = this.state;
    items.unshift(item);
    this.setState({
      items,
    });
  }

  renderItem = ({ group, day, date }: Object) => (
    <View key={group} style={styles.item}>
      <Text style={styles.itemGroup}>
        {group}
      </Text>
      <View>
        <Text style={styles.itemDate}>
          {`${day} - ${date}`}
        </Text>
      </View>
    </View>
  )

  renderItemList = (items: Array<Object>): Array<any> => (
    items.map(item => this.renderItem(item))
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
          <TouchableOpacity style={styles.addItemButton} onPress={() => this.addNewItem({ group: 'chest', day, date })}>
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
