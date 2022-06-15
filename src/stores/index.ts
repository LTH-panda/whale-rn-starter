/* eslint-disable no-undef */
/* eslint-disable global-require */
import {configureStore} from '@reduxjs/toolkit';

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: {},
  middleware: middlewares,
});

export default store;
