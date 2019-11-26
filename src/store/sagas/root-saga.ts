import { all, AllEffect } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { watchGetProducts } from './products';

export default function* rootSaga(): IterableIterator<AllEffect<SagaIterator>> {
  yield all([watchGetProducts()]);
}
