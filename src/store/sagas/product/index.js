import { put, call, takeLatest, fork, all, select } from 'redux-saga/effects';
import api from '../../../services/api';
import {
  Creators as ProductActions,
  Types as ProductTypes,
} from '../../ducks/product';

function* createProduct({ payload }) {
  const products = yield select((state) => state.product.data);
  try {
    const { status, data } = yield call(api.post, '/product', payload);
    if (status === 200) {
      products.push(data);
      yield put(ProductActions.postProductSuccess(products));
    }
  } catch {
    yield put(ProductActions.postProductError('Erro ao salvar produto'));
  }
}

function* createService({ payload }) {
  const services = yield select((state) => state.product.serviceData);
  try {
    const { status, data } = yield call(api.post, '/service', payload);
    if (status === 200) {
      services.push(data);
      yield put(ProductActions.postServiceSuccess(services));
    }
  } catch {
    yield put(ProductActions.postServiceError('Erro ao salvar serviço'));
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

function* getAllServices() {
  try {
    const { status, data } = yield call(api.get, '/service');

    if (status === 200) {
      yield put(ProductActions.getServiceSuccess(data));
    }
  } catch {
    yield put(ProductActions.getServiceError('Erro ao listar serviços'));
  }
}

function* removeProduct({ payload }) {
  const { id } = payload;

  const products = yield select((state) => state.product.data);
  try {
    const { status } = yield call(api.delete, `/product/${id}`);

    if (status === 200 || status === 204) {
      const index = products.findIndex((item) => item.id === id);
      if (index > 0) {
        products.splice(index, 1);
      }
      yield put(ProductActions.removeProductSuccess());
    }
  } catch {
    yield put(ProductActions.removeProductError('Erro ao deletar produto'));
  }
}

function* removeService({ payload }) {
  const { id } = payload;
  const services = yield select((state) => state.product.serviceData);
  try {
    const { status } = yield call(api.delete, `/service/${id}`);

    if (status === 200 || status === 204) {
      const index = services.findIndex((item) => item.id === id);
      if (index > 0) {
        services.splice(index, 1);
      }
      yield put(ProductActions.removeServiceSuccess());
    }
  } catch {
    yield put(ProductActions.removeServiceError('Erro ao deletar serviço'));
  }
}

function* editProduct({ payload }) {
  const { id, product } = payload;

  const products = yield select((state) => state.product.data);

  try {
    const { status, data } = yield call(api.put, `/product/${id}`, product);
    if (status === 200) {
      const index = products.findIndex((item) => item.id === id);
      if (index > 0) {
        products[index] = data;
      }
      yield put(ProductActions.editProductSuccess(products));
    }
  } catch {
    yield put(ProductActions.editProductError('Erro ao editar produto'));
  }
}

function* editService({ payload }) {
  const { id, service } = payload;

  const services = yield select((state) => state.product.serviceData);

  try {
    const { status, data } = yield call(api.put, `/service/${id}`, service);
    if (status === 200) {
      const index = services.findIndex((item) => item.id === id);
      if (index > 0) {
        services[index] = data;
      }
      yield put(ProductActions.editServiceSuccess());
    }
  } catch {
    yield put(ProductActions.editServiceError('Erro ao editar produto'));
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

export function* createServiceWatcher() {
  yield takeLatest(ProductTypes.ADD_SERVICE_REQUEST, createService);
}

export function* getAllServicesWatcher() {
  yield takeLatest(ProductTypes.LIST_SERVICE_REQUEST, getAllServices);
}

export function* removeServiceWatcher() {
  yield takeLatest(ProductTypes.REMOVE_SERVICE_REQUEST, removeService);
}

export function* editServiceWatcher() {
  yield takeLatest(ProductTypes.EDIT_SERVICE_REQUEST, editService);
}

export default function* rootSaga() {
  yield all([
    fork(createProductWatcher),
    fork(getAllProductsWatcher),
    fork(removeProductWatcher),
    fork(editProductWatcher),
    fork(createServiceWatcher),
    fork(getAllServicesWatcher),
    fork(removeServiceWatcher),
    fork(editServiceWatcher),
  ]);
}
