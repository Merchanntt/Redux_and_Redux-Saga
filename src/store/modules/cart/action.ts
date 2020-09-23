import { IProducts, ReducerTypes } from "./types";

export function addProductoToCartRequest(products: IProducts) {
  return {
    type: ReducerTypes.addProductToCartRequest,
    payload: {
      products
    }
  }
}

export function addProductoToCartSuccess(products: IProducts) {
  return {
    type: ReducerTypes.addProductToCartSuccess,
    payload: {
      products
    }
  }
}

export function addProductoToCartFailure(productsId: number) {
  return {
    type: ReducerTypes.addProductToCartFailure,
    payload: {
      productsId
    }
  }
}