import R from 'ramda';
import React from 'react';
import Styles from './ExerciseStyles';
import { IConversion, kgToLb, lbToKg } from '../../Utils/Conversions';
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

  updateSetForId = (id: string) => (updatedSetValue: object) => {
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

  renderSet = (set: ISet) => {
    const handleSetUpdate = this.updateSetForId(set.id);
    return (
      <View
        style={Styles.set}
        key={set.id}
      >
        <TextInput
          value={`${Math.round(set.weight)}`}
          onBlur={e => handleSetUpdate({ weight: Number(e.nativeEvent.text) })}
        />
        <Text>
          {' x '}
        </Text>
        <TextInput
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
          <TextInput style={Styles.headerText}>
            {this.props.name}
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
