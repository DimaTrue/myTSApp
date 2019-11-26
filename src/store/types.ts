export enum ProductsActionTypes {
  GET_PRODUCTS_INIT = 'GET_PRODUCTS_INIT',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE',
}

export interface IgetProductsListAction {
  type: ProductsActionTypes.GET_PRODUCTS_INIT;
  payload: number;
}

export interface IgetProductsListSuccessAction {
  type: ProductsActionTypes.GET_PRODUCTS_SUCCESS;
  payload: Array<IProduct>;
}

export interface IgetProductsListFailureAction {
  type: ProductsActionTypes.GET_PRODUCTS_FAILURE;
  payload: string;
}

export type ProductsActions =
  | IgetProductsListAction
  | IgetProductsListSuccessAction
  | IgetProductsListFailureAction;

export interface IImages {
  readonly advert?: number;
  readonly file?: string;
  readonly pk?: number;
}

export interface IOwner {
  readonly avatar?: string;
  readonly color_scheme?: string;
  readonly email: string;
  readonly first_name?: string;
  readonly id: number;
  readonly language?: string;
  readonly last_name?: string;
  readonly location?: any;
  readonly username: string;
}

export interface IProduct {
  readonly activated_at?: string;
  readonly category?: string;
  readonly contract_price?: boolean;
  readonly currency?: number;
  readonly images?: IImages[];
  readonly is_active?: boolean;
  readonly location?: number;
  readonly owner?: IOwner;
  readonly pk: number;
  readonly price?: number;
  readonly text?: string;
  readonly theme?: string;
}

export interface IProductsState {
  readonly isLoading: boolean;
  readonly productList: IProduct[];
  readonly error: string;
}
