import R from 'ramda';
import React from 'react';
import Styles from './ExerciseStyles';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export interface IExercise {
  id: string;
  name: string;
  sets: ISet[];
  massUnit: MassUnit;
  notes?: string;
  // description: string;
  // completionTime: number;
}

interface ISet {
  weight: number;
  reps: number;
  id: number;
}

enum MassUnit {
  Kg = 'Kg',
  Lb = 'Lb',
}

const lbToKg = (lb: number): number => lb * 0.45359237;

const kgToLb = (kg: number): number => kg / 0.45359237;

class Exercise extends React.Component {
  state = {
    sets: [
      { weight: 80, reps: 8, id: 1 },
      { weight: 80, reps: 8, id: 2 },
      { weight: 80, reps: 8, id: 3 },
      { weight: 80, reps: 8, id: 4 },
    ],
    massUnit: MassUnit.Kg,
  };

  renderSeparator = () => (
    <Text style={Styles.separator}>
      |
    </Text>
  )

  updateSetForId = (id: number) => (updatedSetValue: object) => {
    const { sets } = this.state;
    const selectedIndex = R.findIndex(R.propEq('id', id))(sets);
    const updatedSet = {
      ...sets[selectedIndex],
      ...updatedSetValue,
    };

    this.setState({
      sets: R.update(selectedIndex, updatedSet, sets),
    });
  }

  renderSet (set: ISet) {
    const handleSetUpdate = this.updateSetForId(set.id);
    return (
      <View style={Styles.set}>
        <TextInput
          value={`${Math.round(set.weight)}`}
          onBlur={e => handleSetUpdate({ weight: e.nativeEvent.text })}
        />
        <Text>
          {' x '}
        </Text>
        <TextInput
          value={`${set.reps}`}
          onBlur={e => handleSetUpdate({ reps: e.nativeEvent.text })}
        />
      </View>
    );
  }

  appendSeparatorToSet = (set: ISet) => [
    this.renderSet(set),
    this.renderSeparator(),
  ]

  renderSetsWithSeparators = R.pipe(
    R.chain(this.appendSeparatorToSet),
    arr => R.dropLast(1, arr),
  );

  renderSets () {
    const { sets } = this.state;

    return (
      <View style={Styles.setsContainer}>
        {this.renderSetsWithSeparators(sets)}
      </View>
    );
  }

  convertWeightsInSets = (sets: ISet[], conversionFunc: Function) => R.map(
    R.applySpec({
      weight: ({ weight }: { weight: number }) => conversionFunc(weight),
      reps: ({ reps }: { reps: number }) => R.identity(reps),
    }),
  )(sets)

  toggleMassUnit = () => {
    const {
      massUnit: currentMassUnit,
      sets,
    } = this.state;

    const { newMassUnit, conversionFunc } =
      currentMassUnit === MassUnit.Kg
      ?  { newMassUnit: MassUnit.Lb, conversionFunc: kgToLb }
      : { newMassUnit: MassUnit.Kg, conversionFunc: lbToKg };

    this.setState({
      massUnit: newMassUnit,
      sets: this.convertWeightsInSets(sets, conversionFunc),
    });
  }

  render () {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TextInput style={Styles.headerText}>
            Flat bench
          </TextInput>
          <TouchableOpacity
            onPress={this.toggleMassUnit}
          >
            <Text style={Styles.headerText}>
              {this.state.massUnit}
            </Text>
          </TouchableOpacity>
        </View>
        {this.renderSets()}
      </View>
    );
  }
}

export default Exercise;
