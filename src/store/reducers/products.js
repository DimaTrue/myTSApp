export const GET_PRODUCTS_INIT = 'GET_PRODUCTS_INIT';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

const initialState = {
  isLoading: false,
  productList: [],
  error: '',
};

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

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_INIT:
      return { ...state, isLoading: true };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: state.productList.concat(action.payload.data),
        countPages: action.payload.meta.total,
        isLoading: false,
      };

    case GET_PRODUCTS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}
