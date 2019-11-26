import { createSelector } from 'reselect';
import { RootState } from '../reducers';
import { IProduct } from '../types';

export const isLoadingSelector = (state: RootState): boolean =>
  state.products.isLoading;

export const productsSelector = (state: RootState): Array<IProduct> =>
  state.products.productList;

export const getErrorSelector = (state: RootState): string =>
  state.products.error;
