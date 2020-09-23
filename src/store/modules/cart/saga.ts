import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { IStateReducer } from '../..';
import { addProductoToCartFailure, addProductoToCartRequest, addProductoToCartSuccess } from './action';
import api from '../../../services/api';
import { ReducerTypes } from './types';

type checkProductStockRequest = ReturnType<typeof addProductoToCartRequest>

interface StockResponseData {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: checkProductStockRequest) {
  const {products} = payload;

  const productQuatityInCart: number = yield select((state: IStateReducer) => {
    return state.cart.items.find(item => item.products.id === products.id)?.quantity ?? 0
  })

  const checkQuantityInStock: AxiosResponse<StockResponseData> = yield call(api.get, `stock/${products.id}`)

  if (checkQuantityInStock.data.quantity > productQuatityInCart) {
    yield put(addProductoToCartSuccess(products))
  } else {
    yield put(addProductoToCartFailure(products.id))
  }
} 

export default all([
  takeLatest(ReducerTypes.addProductToCartRequest, checkProductStock)
])