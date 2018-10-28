import React from 'react';
import { shallow } from 'enzyme';
import navigation from '../../../mocks/react-navigation';

import AddExerciseModal from './AddExerciseModal';

describe('<AddExerciseModal />', () => {
  it('should render', () => {
    shallow(<AddExerciseModal navigation={navigation} />);
  });
});
