import sinon from 'sinon';

export default {
  state: '',
  dispatch: sinon.fake(),
  goBack: sinon.fake(),
  dismiss: sinon.fake(),
  navigate: sinon.fake(),
  openDrawer: sinon.fake(),
  closeDrawer: sinon.fake(),
  toggleDrawer: sinon.fake(),
  getParam: sinon.fake(),
  setParams: sinon.fake(),
  addListener: sinon.fake(),
  push: sinon.fake(),
  replace: sinon.fake(),
  pop: sinon.fake(),
  popToTop: sinon.fake(),
  isFocused: sinon.fake(),
};
