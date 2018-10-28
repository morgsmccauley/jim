import moment from 'moment';

export const getDay = (): string => moment().format('dddd');

export const getDate = (): string => moment().format('Do MMMM YYYY');
