import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import sinon from 'sinon';

const JSDOM = require('JSDOM').JSDOM;

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

Enzyme.configure({ adapter: new Adapter() });

const globalAny:any = global;

globalAny.window = dom.window;
globalAny.document = dom.window.document;
globalAny.sinon = sinon;
globalAny.expect = chai.expect;
