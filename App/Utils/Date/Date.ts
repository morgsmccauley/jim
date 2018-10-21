import moment from 'moment';

export const getDate = (): string => moment().format('dddd');

export const getDay = (): string => moment().format('Do MMMM YYYY');
