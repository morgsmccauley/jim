// import Modal from 'react-native-modal';
import React from 'react';
import Styles from './AddExerciseModalStyles';
import { NavigationScreenProp } from 'react-navigation';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface IAddExerciseModalProps {
  navigation: NavigationScreenProp<any, any>;
}

interface IAddExerciseModalState {
  name: string;
  sets: number;
  reps: number;
}

export default class AddExerciseModal
  extends React.Component<IAddExerciseModalProps, IAddExerciseModalState> {

  state = {
    name: '',
    sets: 0,
    reps: 0,
  };

  updateName (name: string) {
    this.setState({ name });
  }

  updateSets (sets: string) {
    this.setState({ sets: Number(sets) });
  }

  updateReps (reps: string) {
    this.setState({ reps: Number(reps) });
  }

  dismissModal ({ name, sets, reps }: { name: string, sets: number, reps: number }) {
    this.props.navigation.state.params.onComplete({ name, sets, reps });
    this.props.navigation.goBack();
  }

  render () {
    const { name, sets, reps } = this.state;

    return (
      <View style={Styles.flex}>
        <View style={Styles.container}>
          <Text style={Styles.header}>
            Add Exercise
          </Text>
          <TextInput
            style={Styles.nameInput}
            placeholder="Exercise"
            onChange={({ nativeEvent: { text: name } }) => this.updateName(name)}
          />
          <View style={Styles.setsRepsContainer}>
            <TextInput
              style={Styles.setsInput}
              placeholder="Sets"
              onChange={({ nativeEvent: { text: sets } }) => this.updateSets(sets)}
            />
            <TextInput
              style={Styles.repsInput}
              placeholder="Reps"
              onChange={({ nativeEvent: { text: reps } }) => this.updateReps(reps)}
            />
          </View>
          <TouchableOpacity
            style={{ padding: 20, borderRadius: 5 }}
            onPress={() => this.dismissModal({ name, sets, reps })}
          >
            <Text style={Styles.addButton}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
