import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as modules from './modules';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'rootTestFrontend',
  storage,
};

const getReducers = () =>
  Object.keys(modules).reduce((acc, curr) => {
    const module = modules[curr];
    if (module.reducers && module.reducers.reducer) {
      acc[module.constants.default] = module.reducers.reducer;
    }
    return acc;
  }, {});

const runSagas = (sagaMiddleware) =>
  Object.keys(modules).map((key) => {
    const example = modules[key];
    if (example.sagas) {
      return sagaMiddleware.run(example.sagas);
    }
  });

export const createReduxStore = () => {
  const initialState = {};
  const middlewares = [];
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middlewares));
  const enhancer = composeWithDevTools(...enhancers);
  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers(getReducers()),
  );
  const store = createStore(persistedReducer, initialState, enhancer);
  const persistor = persistStore(store);
  runSagas(sagaMiddleware);
  return { store, persistor };
};
