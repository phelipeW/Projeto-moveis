import { put, call, takeLatest, fork, all } from 'redux-saga/effects';
import api from '../../../services/api';
import {
  Creators as ProductActions,
  Types as ProductTypes,
} from '../../ducks/product';

function* createProduct({ payload }) {
  try {
    const { status, data } = yield call(api.post, '/product', payload);
    if (status === 200) {
      yield put(ProductActions.postProductSuccess(data));
    }
  } catch {
    yield put(ProductActions.postCardError('Erro ao salvar produto'));
  }
}

function* getAllProducts() {
  try {
    const { status, data } = yield call(api.get, '/product');

    if (status === 200) {
      yield put(ProductActions.getCardsSuccess(data));
    }
  } catch {
    yield put(ProductActions.getProductError('Erro ao salvar produto'));
  }
}

export function* createProductWatcher() {
  yield takeLatest(ProductTypes.ADD_PRODUCT_REQUEST, createProduct);
}

export function* getAllProductsWatcher() {
  yield takeLatest(ProductTypes.LIST_PRODUCT_REQUEST, getAllProducts);
}

export default function* rootSaga() {
  yield all([fork(createProductWatcher), fork(getAllProductsWatcher)]);
}
