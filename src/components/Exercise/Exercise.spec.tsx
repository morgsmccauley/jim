import React from 'react';
import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import selector from '../../Utils/selector/selector';

import Exercise from './Exercise';

const sets = [
  { id: '1', weight: 80, reps: 5 },
  { id: '2', weight: 80, reps: 5 },
  { id: '3', weight: 80, reps: 5 },
  { id: '4', weight: 80, reps: 5 },
];

const getSetsAndReps = (wrapper: ShallowWrapper) =>
  wrapper.find(selector('View', 'Exercise_set')).find('TextInput').map(el => el.prop('value'));

describe('<Exercise />', () => {
  it('should render the exercise name', () => {
    const wrapper = shallow(<Exercise name="chest" sets={sets} />);
    const renderedHeader = wrapper.find(selector('TextInput', 'Exercise_header')).render().text();
    expect(renderedHeader).to.equal('chest');
  });

  it('should render sets and reps', () => {
    const wrapper = shallow(<Exercise name="chest" sets={sets} />);
    const renderedSetsAndReps = getSetsAndReps(wrapper);
    expect(renderedSetsAndReps).to.deep.equal(['80', '5', '80', '5', '80', '5', '80', '5']);
  });

  it('should convert kg to lb', () => {
    let renderedSetsAndReps;
    const wrapper = shallow(<Exercise name="chest" sets={sets} />);
    const conversionButton = wrapper
      .find(selector('TouchableOpacity', 'Exercise_conversion-button'));
    conversionButton.simulate('press');
    renderedSetsAndReps = getSetsAndReps(wrapper);

    expect(renderedSetsAndReps).to.deep.equal(['176', '5', '176', '5', '176', '5', '176', '5']);
  });

  it('should convert lb to kg', () => {
    let renderedSetsAndReps;
    const wrapper = shallow(<Exercise name="chest" sets={sets} />);
    const conversionButton = wrapper
      .find(selector('TouchableOpacity', 'Exercise_conversion-button'));
    conversionButton.simulate('press');
    conversionButton.simulate('press');
    renderedSetsAndReps = getSetsAndReps(wrapper);

    expect(renderedSetsAndReps).to.deep.equal(['80', '5', '80', '5', '80', '5', '80', '5']);
  });

  it('should update set state on weight change', () => {
    const newWeight = '100';
    const wrapper = shallow(<Exercise name="chest" sets={sets} />);
    const weight = wrapper.find(selector('TextInput', 'Exercise_set-weight')).first();
    weight.simulate('blur', { nativeEvent: { text: newWeight } });
    const stateWeight = (wrapper.state('sets') as any)[0].weight;
    expect(stateWeight).to.equal(Number(newWeight));
  });

  it('should update set state on rep change', () => {
    const newReps = '8';
    const wrapper = shallow(<Exercise name="chest" sets={sets} />);
    const weight = wrapper.find(selector('TextInput', 'Exercise_set-reps')).first();
    weight.simulate('blur', { nativeEvent: { text: newReps } });
    const stateReps = (wrapper.state('sets') as any)[0].reps;
    expect(stateReps).to.equal(Number(newReps));
  });
});
