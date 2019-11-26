import { call, put, takeEvery, all } from 'redux-saga/effects';

import { getProductList } from '../../api-client/products';
import * as types from '../reducers/products';
import * as actions from '../reducers/products';

export function* watchGetProducts() {
  yield takeEvery(types.GET_PRODUCTS_INIT, getProducts);
}

export function* getProducts({ payload }) {
  try {
    const result = yield call(getProductList, payload);
    yield put(actions.getProductsListSuccess(result.data));
  } catch (error) {
    yield put(actions.getProductsListFailure(error));
  }
}

export default function* products() {
  yield all([watchGetProducts()]);
}
