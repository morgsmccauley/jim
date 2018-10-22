import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import selector from '../../Utils/Selector/Selector';
import navigation from '../../../mocks/react-navigation';
import { MassUnit } from '../../Components/Exercise/Exercise';

import WorkoutDetails from './WorkoutDetails';

chai.use(require('sinon-chai'));
const expect = chai.expect;

const exercises = [
  { name: 'chest',
    id: 'chest',
    massUnit: MassUnit.Kg,
    sets: [
      { id: '1', weight: 80, reps: 5 },
      { id: '2', weight: 80, reps: 5 },
    ],
  },
  { name: 'dips',
    id: 'dips',
    massUnit: MassUnit.Kg,
    sets: [
      { id: '1', weight: 20, reps: 8 },
      { id: '2', weight: 20, reps: 8 },
    ],
  },
];

const props = {
  navigation,
};

describe('<WorkoutDetails />', () => {
  it('should render the workout name', () => {
    const wrapper = shallow(<WorkoutDetails {...props} />);
    const renderedName = wrapper.find(selector('Text', 'WorkoutDetails_name')).render().text();
    expect(renderedName).to.equal('Placeholder');
  });

  it('should render the workout time', () => {
    const wrapper = shallow(<WorkoutDetails {...props} />);
    const renderedTime = wrapper.find(selector('Text', 'WorkoutDetails_date')).render().text();
    expect(renderedTime).to.equal('7th August 2018');
  });

  it('should render the workout date', () => {
    const wrapper = shallow(<WorkoutDetails {...props} />);
    const renderedDate = wrapper.find(selector('Text', 'WorkoutDetails_time')).render().text();
    expect(renderedDate).to.equal('11:30am - 1:00pm');
  });

  it('should render the exercises', () => {
    const wrapper = mount(<WorkoutDetails {...props} />);
    wrapper.setState({ exercises });
    const renderedExercises = wrapper.find(selector('FlatList', 'WorkoutDetails_exercise-list'));
    const exerciseNames = renderedExercises.find(selector('TextInput', 'Exercise_header'));
    expect(exerciseNames).to.have.length(2);
    expect(exerciseNames.map(el => el.render().text())).to.deep.equal(['chest', 'dips']);
  });

  it('should open AddExerciseModal and pass the onComplete callback on add exercise press', () => {
    const wrapper = shallow(<WorkoutDetails {...props} />);
    const addExerciseButton = wrapper.find(selector('TouchableOpacity', 'WorkoutDetails_add-exercise-button'));
    addExerciseButton.simulate('press');
    expect(navigation.navigate).to.have.been.calledWith('AddExerciseModal', { onComplete: sinon.match.func });
    navigation.navigate.resetHistory();
  });

  it('should create an initial exercise on AddExerciseModal complete', () => {
    const wrapper = mount(<WorkoutDetails {...props} />);
    const addExercise = (wrapper.instance() as any).addExercise;
    addExercise({ name: 'chest', sets: 2, reps: 8 });
    const firstExercise = (wrapper.state('exercises') as any)[0];
    expect(firstExercise).to.include({
      name: 'chest',
      massUnit: 'Kg',
    });
    firstExercise.sets.forEach((set: any) => {
      expect(set).to.include({ reps: 8, weight: 0 });
    });
  });
});
