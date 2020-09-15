/* eslint-disable no-console */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reactotronConfigure } from '../config/ReactotronConfig';
import rootSagas from './sagas';
import rootReducers from './ducks';

reactotronConfigure();
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [];
middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

const store = createStore(rootReducers, composer);

sagaMiddleware.run(rootSagas);

export default store;
