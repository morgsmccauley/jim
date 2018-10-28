import moment from 'moment';
import { expect } from 'chai';

import {
  getDate,
  getDay,
} from './date';

describe('Date', () => {
  it('should get the current day, month, yeah', () => {
    expect(getDate()).to.equal(moment().format('Do MMMM YYYY'));
  });

  it('should get the current calendar day', () => {
    expect(getDay()).to.equal(moment().format('dddd'));
  });
});
