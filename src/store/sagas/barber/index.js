import { put, call, takeLatest, fork, all, select } from 'redux-saga/effects';
import api from '../../../services/api';
import {
  Creators as BarberActions,
  Types as BarberTypes,
} from '../../ducks/barber';

function* createBarber({ payload }) {
  console.log('payload', payload);
  const barbers = yield select((state) => state.barber.data);
  try {
    const { status, data } = yield call(api.post, '/barber', payload);
    if (status === 200) {
      barbers.push(data);
      yield put(BarberActions.newBarberSuccess(barbers));
    }
  } catch {
    yield put(BarberActions.newBarberError('Erro ao salvar barbeiro'));
  }
}

function* putBarber({ payload }) {
  const { id, barber } = payload;

  const barbers = yield select((state) => state.barber.data);
  try {
    const { status, data } = yield call(api.put, `/barber/${id}`, barber);
    if (status === 200) {
      const index = barbers.findIndex((item) => item.id === id);
      if (index > 0) {
        barbers[index] = data;
      }
      yield put(BarberActions.editBarberSuccess(barbers));
    }
  } catch {
    yield put(BarberActions.editBarberError('Erro ao editar barbeiro'));
  }
}

function* removeBarber({ payload }) {
  const { id } = payload;
  const barbers = yield select((state) => state.barber.data);
  try {
    const { status } = yield call(api.delete, `/barber/${id}`);
    if (status === 200 || status === 204) {
      const index = barbers.findIndex((item) => item.id === id);
      if (index > 0) {
        barbers.splice(index, 1);
      }
      yield put(BarberActions.deleteBarberSuccess());
    }
  } catch {
    yield put(BarberActions.deleteBarberError('Erro ao deletar barbeiro'));
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

export function* putBarberWatcher() {
  yield takeLatest(BarberTypes.EDIT_BARBER_REQUEST, putBarber);
}

export function* removeBarberWatcher() {
  yield takeLatest(BarberTypes.DELETE_BARBER_REQUEST, removeBarber);
}

export default function* rootSaga() {
  yield all([
    fork(createBarberWatcher),
    fork(getAllBarberWatcher),
    fork(putBarberWatcher),
    fork(removeBarberWatcher),
  ]);
}
