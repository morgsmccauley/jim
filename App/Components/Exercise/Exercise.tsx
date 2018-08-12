import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
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
    justifyContent: 'space-between',
  },
});

export interface IExercise {
  id: string;
  name: string;
  sets: ISet[];
  massUnit?: MassUnit;
  notes?: string;
  // description: string;
  // completionTime: number;
}

interface ISet {
  weight: number;
  reps: number;
}

enum MassUnit {
  Kg,
  Lb,
}

export default () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>
        Flat bench
      </Text>
      <TouchableOpacity>
        <Text>
          Kg
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.setsContainer}>
      <TextInput value="80" />
      <Text>
        /
      </Text>
      <TextInput value="80" />
      <Text>
        /
      </Text>
      <TextInput value="80" />
      <Text>
        /
      </Text>
      <TextInput value="80" />
    </View>
  </View>
);
