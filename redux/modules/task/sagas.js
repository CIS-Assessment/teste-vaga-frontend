import {
  take,
  all,
  put,
  delay,
  fork,
  cancel,
  call,
  takeLatest,
} from 'redux-saga/effects';

import * as actions from './actions';

function* rootSaga() {
  yield all([]);
}

export default rootSaga;
