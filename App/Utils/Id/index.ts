// import nanoId from 'nanoid/non-secure';
const nanoId = require('nanoid/non-secure');

const idGen = (prefix?: string) => `${prefix ? `${prefix}_` : ''}${nanoId()}`;

export default idGen;
