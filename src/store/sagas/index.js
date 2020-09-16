import { all } from 'redux-saga/effects';
import productSagas from './product';
import authSagas from './auth';

export default function* rootSaga() {
  yield all([productSagas(), authSagas()]);
}
