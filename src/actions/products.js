import {
  GET_PRODUCTS_INIT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from '../action-types/products';

export const getProductsList = pageNumber => ({
  type: GET_PRODUCTS_INIT,
  payload: pageNumber,
});

export const getProductsListSuccess = data => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: data,
});

export const getProductsListFailure = error => ({
  type: GET_PRODUCTS_FAILURE,
  payload: error,
});
