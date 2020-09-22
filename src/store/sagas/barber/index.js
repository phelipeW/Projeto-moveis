import { put, call, takeLatest, fork, all } from 'redux-saga/effects';
import api from '../../../services/api';
import {
  Creators as BarberActions,
  Types as BarberTypes,
} from '../../ducks/barber';

function* createBarber({ payload }) {
  try {
    const { status, data } = yield call(api.post, '/barber', payload);
    if (status === 200) {
      yield put(BarberActions.newBarberSuccess(data));
    }
  } catch {
    yield put(BarberActions.newBarberError('Erro ao salvar barbeiro'));
  }
}

function* getAllBarbers() {
  try {
    const { status, data } = yield call(api.get, '/barber');

    if (status === 200) {
      yield put(BarberActions.getBarberSuccess(data));
    }
  } catch {
    yield put(BarberActions.getBarberError('Erro ao listar barbeiros'));
  }
}

export function* createBarberWatcher() {
  yield takeLatest(BarberTypes.ADD_BARBER_REQUEST, createBarber);
}

export function* getAllBarberWatcher() {
  yield takeLatest(BarberTypes.LIST_BARBER_REQUEST, getAllBarbers);
}

export default function* rootSaga() {
  yield all([fork(createBarberWatcher), fork(getAllBarberWatcher)]);
}
