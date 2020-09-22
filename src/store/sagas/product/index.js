import { put, call, takeLatest, fork, all, select } from 'redux-saga/effects';
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
    yield put(ProductActions.postProductError('Erro ao salvar produto'));
  }
}

function* getAllProducts() {
  try {
    const { status, data } = yield call(api.get, '/product');

    if (status === 200) {
      yield put(ProductActions.getProductSuccess(data));
    }
  } catch {
    yield put(ProductActions.getProductError('Erro ao listar produtos'));
  }
}

function* removeProduct({ payload }) {
  const { id } = payload;

  const products = yield select((state) => state.product.data);
  console.log('products', products);
  try {
    const { status } = yield call(api.delete, `/product/${id}`);

    if (status === 200 || status === 204) {
      const index = products.findIndex((item) => item.id === id);
      console.log('index', index);
      if (index > 0) {
        products.splice(index, 1);
      }
      yield put(ProductActions.removeProductSuccess());
    }
  } catch {
    yield put(ProductActions.removeProductError('Erro ao deletar produto'));
  }
}

function* editProduct({ payload }) {
  const { id, product } = payload;
  try {
    const { status, data } = yield call(api.put, `/product/${id}`, product);
    if (status === 200) {
      yield put(ProductActions.editProductSuccess(data));
    }
  } catch {
    yield put(ProductActions.editProductError('Erro ao editar produto'));
  }
}

export function* createProductWatcher() {
  yield takeLatest(ProductTypes.ADD_PRODUCT_REQUEST, createProduct);
}

export function* getAllProductsWatcher() {
  yield takeLatest(ProductTypes.LIST_PRODUCT_REQUEST, getAllProducts);
}

export function* removeProductWatcher() {
  yield takeLatest(ProductTypes.REMOVE_PRODUCT_REQUEST, removeProduct);
}

export function* editProductWatcher() {
  yield takeLatest(ProductTypes.EDIT_PRODUCT_REQUEST, editProduct);
}

export default function* rootSaga() {
  yield all([
    fork(createProductWatcher),
    fork(getAllProductsWatcher),
    fork(removeProductWatcher),
    fork(editProductWatcher),
  ]);
}
