import React from 'react';
import { shallow } from 'enzyme';
import navigation from '../../../mocks/react-navigation';

import Workouts from './Workouts';

describe('<Workouts />', () => {
  it('should render', () => {
    shallow(<Workouts navigation={navigation} />);
  });
});
