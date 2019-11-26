import {
  IProduct,
  ProductsActionTypes,
  ProductsActions,
  IProductsState,
} from '../types';

const initialState: IProductsState = {
  isLoading: false,
  productList: [],
  error: '',
};

export default function(
  state: IProductsState = initialState,
  action: ProductsActions,
): IProductsState {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_INIT:
      return { ...state, isLoading: true };

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        isLoading: false,
      };

    case ProductsActionTypes.GET_PRODUCTS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}

export const getProductsList = (pageNumber: number): ProductsActions => ({
  type: ProductsActionTypes.GET_PRODUCTS_INIT,
  payload: pageNumber,
});

export const getProductsListSuccess = (
  data: Array<IProduct>,
): ProductsActions => ({
  type: ProductsActionTypes.GET_PRODUCTS_SUCCESS,
  payload: data,
});

export const getProductsListFailure = (error: any): ProductsActions => ({
  type: ProductsActionTypes.GET_PRODUCTS_FAILURE,
  payload: error,
});
