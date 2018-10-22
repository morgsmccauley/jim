import moment from 'moment';
import { expect } from 'chai';

import {
  getDate,
  getDay,
} from './Date';

describe('Date', () => {
  it('should get the current day, month, yeah', () => {
    expect(getDate()).to.equal(moment().format('Do MMMM YYYY'));
  });

  it('should get the current calendar day', () => {
    expect(getDay()).to.equal(moment().format('dddd'));
  });
});
