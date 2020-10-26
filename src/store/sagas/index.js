import { all } from 'redux-saga/effects';
import productSagas from './product';
import authSagas from './auth';
import barberSagas from './barber';
import scheduleSagas from './schedule';

export default function* rootSaga() {
  yield all([productSagas(), authSagas(), barberSagas(), scheduleSagas()]);
}
