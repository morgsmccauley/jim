// @flow

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import R from 'ramda';
import moment from 'moment';
import nanoId from 'nanoid/non-secure';
import styles from './WorkoutsScreenStyles';

type Props = {}
type State = {
  items: Array<{
    id: string,
    group: string,
    day: string,
    date: string,
  }>,
}
class Workouts extends React.Component<Props, State> {
  state = {
    items: [],
  }

  getDate = () => ({
    day: moment().format('dddd'),
    date: moment().format('Do MMMM YYYY'),
  });

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

  renderItem = ({
    id,
    day,
    date,
  }: Object) => (
    <View key={id} style={styles.item}>
      <TextInput
        style={styles.itemGroup}
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

  renderItemList = (items: Array<Object>): Array<any> => (
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
            onPress={
              () => this.addNewItem({
                day,
                date,
              })
            }
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
