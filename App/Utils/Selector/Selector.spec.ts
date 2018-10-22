import { expect } from 'chai';

import selector from './Selector';

describe('Selector', () => {
  it('should return a JQuery type selector', () => {
    expect(selector('Component', 'testID')).to.equal('Component[testID="testID"]');
  });
});
