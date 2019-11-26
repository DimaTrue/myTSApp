import { createSelector } from 'reselect';

export const isLoadingSelector = state => state.products.isLoading;

export const productsSelector = state => state.products.productList;

export const getErrorSelector = state => state.products.error;
