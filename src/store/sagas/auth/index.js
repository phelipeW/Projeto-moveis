import { all, call, takeLatest, put, fork } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import api from '../../../services/api';
import { colors } from '../../../styles';
import {
  Creators as LoginActions,
  Types as LoginTypes,
} from '../../ducks/login';
import {
  Creators as RegisterActions,
  Types as RegisterTypes,
} from '../../ducks/register';

async function saveTokens({ token, refreshToken }) {
  await AsyncStorage.multiSet([
    ['barberadmin:token', token],
    ['barberadmin:refreshToken', refreshToken],
  ]);
}

async function removeToken() {
  await AsyncStorage.removeItem('barberadmin:token');
  await AsyncStorage.removeItem('barberadmin:refreshToken');
}

function* login({ payload }) {
  try {
    const { data, status } = yield call(api.post, '/login', payload);
    if (status === 200) {
      const { token, refreshToken } = data;
      if (token && refreshToken) {
        yield call(saveTokens, { token, refreshToken });
      }
      yield put(LoginActions.loginSuccess(data));
    }
  } catch (error) {
    yield put(LoginActions.loginRequestFail(error.config.data));
  }
}

function* register({ payload }) {
  try {
    const response = yield call(api.post, '/users', payload);
    if (response.status === 200) {
      yield put(RegisterActions.registerSuccess(response.data));
      showMessage({
        message: 'Registro realizado com sucesso!',
        type: 'default',
        backgroundColor: colors.primary,
        color: colors.white,
      });
    } else {
      showMessage({
        message: 'Erro ao realizar registro',
        type: 'default',
        backgroundColor: colors.secundary,
        color: colors.white,
      });
      yield put(RegisterActions.registerFail());
    }
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message || 'Erro ao realizar registro',
      type: 'default',
      backgroundColor: colors.secundary,
      color: colors.white,
    });
    yield put(RegisterActions.registerFail());
  }
}

function* logout() {
  yield call(removeToken);
}

export function* loginWatcher() {
  yield takeLatest(LoginTypes.LOGIN_REQUEST, login);
}

export function* logoutWatcher() {
  yield takeLatest(LoginTypes.LOGIN_LOGOUT, logout);
}

export function* registerWatcher() {
  yield takeLatest(RegisterTypes.REGISTER_REQUEST, register);
}

export default function* rootSaga() {
  yield all([fork(loginWatcher), fork(registerWatcher), fork(logoutWatcher)]);
}
