import chai from 'chai';

import idGen from './Id';

chai.use(require('chai-string'));
const expect = chai.expect;

describe('Id', () => {
  it('should prefix the id when specified', () => {
    const id = idGen('prefix');
    expect(id()).to.startsWith('prefix_');
  });

  it('should generate random ids', () => {
    const id = idGen();
    expect(id()).to.not.equal(id());
  });
});
