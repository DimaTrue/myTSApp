import * as products from '../action-types/products';

const initialState = {
  isLoading: false,
  productList: [],
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case products.GET_PRODUCTS_INIT:
      return { ...state, isLoading: true };

    case products.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: state.productList.concat(action.payload.data),
        countPages: action.payload.meta.total,
        isLoading: false,
      };

    case products.GET_PRODUCTS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}
