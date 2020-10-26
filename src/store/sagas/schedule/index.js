import { put, call, takeLatest, fork, all, select } from 'redux-saga/effects';
import api from '../../../services/api';
import {
  Creators as ScheduleActions,
  Types as ScheduleTypes,
} from '../../ducks/schedule';

function* createSchedule({ payload }) {
  console.log('payload', payload);
  const schedules = yield select((state) => state.schedule.data);
  try {
    const { status, data } = yield call(api.post, '/schedule', payload);
    if (status === 200) {
      schedules.push(data);
      yield put(ScheduleActions.postScheduleSuccess(schedules));
    }
  } catch {
    yield put(ScheduleActions.postScheduleFail());
  }
}

function* putSchedule({ payload }) {
  const { id, schedule } = payload;

  const schedules = yield select((state) => state.schedule.data);
  try {
    const { status, data } = yield call(api.put, `/schedule/${id}`, schedule);
    if (status === 200) {
      const index = schedules.findIndex((item) => item.id === id);
      if (index > 0) {
        schedules[index] = data;
      }
      yield put(ScheduleActions.editScheduleSuccess(schedules));
    } else {
      yield put(ScheduleActions.editScheduleFail());
    }
  } catch {
    yield put(ScheduleActions.editScheduleFail());
  }
}

function* removeSchedule({ payload }) {
  const { id } = payload;
  const barbers = yield select((state) => state.barber.data);
  try {
    const { status } = yield call(api.delete, `/schedule/${id}`);
    if (status === 200 || status === 204) {
      const index = barbers.findIndex((item) => item.id === id);
      if (index > 0) {
        barbers.splice(index, 1);
      }
      yield put(ScheduleActions.removeScheduleSuccess());
    }
  } catch {
    yield put(ScheduleActions.removeScheduleFail());
  }
}

function* getAllSchedules() {
  try {
    const { status, data } = yield call(api.get, '/schedule');

    if (status === 200) {
      yield put(ScheduleActions.getScheduleSuccess(data));
    }
  } catch {
    yield put(ScheduleActions.getScheduleFail('Erro ao listar barbeiros'));
  }
}

export function* createScheduleWatcher() {
  yield takeLatest(ScheduleTypes.ADD_SCHEDULE_REQUEST, createSchedule);
}

export function* getAllScheduleWatcher() {
  yield takeLatest(ScheduleTypes.LIST_SCHEDULE_REQUEST, getAllSchedules);
}

export function* putScheduleWatcher() {
  yield takeLatest(ScheduleTypes.EDIT_SCHEDULE_REQUEST, putSchedule);
}

export function* removeScheduleWatcher() {
  yield takeLatest(ScheduleTypes.REMOVE_SCHEDULE_REQUEST, removeSchedule);
}

export default function* rootSaga() {
  yield all([
    fork(createScheduleWatcher),
    fork(getAllScheduleWatcher),
    fork(putScheduleWatcher),
    fork(removeScheduleWatcher),
  ]);
}
