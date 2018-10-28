import { expect } from 'chai';

import selector from './selector';

describe('Selector', () => {
  it('should return a JQuery type selector', () => {
    expect(selector('Component', 'testID')).to.equal('Component[testID="testID"]');
  });
});
