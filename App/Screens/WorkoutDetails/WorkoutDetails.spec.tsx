import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import selector from '../../Utils/Selector/Selector';
import navigation from '../../../mocks/react-navigation';

import WorkoutDetails from './WorkoutDetails';

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

  it('should render the exercise list', () => {
    shallow(<WorkoutDetails {...props} />);
  });

  it('should open the add exercise modal when add exercise pressed', () => {
    shallow(<WorkoutDetails {...props} />);
  });
});
