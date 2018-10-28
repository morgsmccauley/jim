import R from 'ramda';
import React from 'react';
import Styles from './ExerciseStyles';
import { IConversion, kgToLb, lbToKg } from '../../utils/conversions/conversions';
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
}

interface ISet {
  weight: number;
  reps: number;
  id: string;
}

export enum MassUnit {
  Kg = 'Kg',
  Lb = 'Lb',
}

interface IExerciseState {
  sets: ISet[];
  massUnit: MassUnit;
}

interface IExerciseProps {
  name: string;
  sets: ISet[];
}

class Exercise extends React.Component<IExerciseProps, IExerciseState> {
  state = {
    sets: this.props.sets,
    massUnit: MassUnit.Kg,
  };

  renderSeparator = () => (
    <Text style={Styles.separator}>
      |
    </Text>
  )

  updateSetForId = (id: string) => (updatedValue: object) => {
    const { sets } = this.state;
    const index = R.findIndex(R.propEq('id', id))(sets);
    const updatedSet = R.merge(sets[index], updatedValue);
    this.setState({
      sets: R.update(index, updatedSet, sets),
    });
  }

  renderSet = (set: ISet) => {
    const handleSetUpdate = this.updateSetForId(set.id);
    return (
      <View
        testID="Exercise_set"
        style={Styles.set}
        key={set.id}
      >
        <TextInput
          testID="Exercise_set-weight"
          value={`${Math.round(set.weight)}`}
          onBlur={e => handleSetUpdate({ weight: Number(e.nativeEvent.text) })}
        />
        <Text>
          {' x '}
        </Text>
        <TextInput
          testID="Exercise_set-reps"
          value={`${set.reps}`}
          onBlur={e => handleSetUpdate({ reps: Number(e.nativeEvent.text) })}
        />
      </View>
    );
  }

  renderSetsWithSeparators = R.pipe(
    R.map(this.renderSet),
    R.intersperse(this.renderSeparator()),
  );

  isKg = ({ massUnit }: IExerciseState) => R.equals(MassUnit.Kg, massUnit);

  convertWeightInSet = (conversion: IConversion) => R.evolve({
    weight: conversion,
  })

  convertTo = (massUnit: MassUnit, conversion: IConversion) => R.evolve({
    sets: R.map(this.convertWeightInSet(conversion)),
    massUnit: R.always(massUnit),
  })

  updateSetsWeight = R.ifElse(
    this.isKg,
    this.convertTo(MassUnit.Lb, kgToLb),
    this.convertTo(MassUnit.Kg, lbToKg),
  );

  toggleMassUnit = () => this.setState(this.updateSetsWeight);

  renderSets () {
    return (
      <View style={Styles.setsContainer}>
        {this.renderSetsWithSeparators(this.state.sets)}
      </View>
    );
  }

  render () {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TextInput testID="Exercise_header" style={Styles.headerText}>
            {this.props.name}
          </TextInput>
          <TouchableOpacity
            testID="Exercise_conversion-button"
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
