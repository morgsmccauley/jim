import { expect } from 'chai';

import {
  lbToKg,
  kgToLb,
} from './conversions';

describe('Conversions', () => {
  it('should convert lb to kg', () => {
    expect(lbToKg(1)).to.equal(0.45359237);
  });

  it('should convert kg to lb', () => {
    expect(kgToLb(1)).to.equal(2.2046226218487757);
  });
});
