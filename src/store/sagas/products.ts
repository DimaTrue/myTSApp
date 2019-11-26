import { call, put, takeEvery } from 'redux-saga/effects';

import { getProductList } from '../../api-client/products';
import { ProductsActionTypes, IgetProductsListAction } from '../types';
import * as actions from '../reducers/products';
import { SagaIterator } from 'redux-saga';

export function* watchGetProducts(): SagaIterator {
  yield takeEvery(ProductsActionTypes.GET_PRODUCTS_INIT, getProducts);
}

export function* getProducts({
  payload,
}: IgetProductsListAction): SagaIterator {
  try {
    const result = yield call(getProductList, payload);
    yield put(actions.getProductsListSuccess(result.data.data));
  } catch (error) {
    yield put(actions.getProductsListFailure(error));
  }
}
