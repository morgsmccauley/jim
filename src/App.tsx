import React from 'react';
import RootStack from './navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);
