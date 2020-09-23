export enum ReducerTypes {
  addProductToCartRequest = 'ADD_PRODUCTS_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCTS_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCTS_TO_CART_FAILURE',
}

export interface IProducts {
  id: number;
  title: string;
  price: number;
}

export interface ICartProducts {
  products: IProducts;
  quantity: number;
}

export interface ICartItems {
  items: ICartProducts[];
  hasNoStock: number[];
}