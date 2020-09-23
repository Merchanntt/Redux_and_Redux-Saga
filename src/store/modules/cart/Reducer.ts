import { Reducer } from "redux";
import produce from 'immer'
import { ICartItems, ReducerTypes } from "./types";

const INITIAL_DATA: ICartItems = {
  items: [],
  hasNoStock: []
}

const cart: Reducer<ICartItems> = (state = INITIAL_DATA, action) => {
  return produce(state, draft => {
  switch (action.type) {
    case ReducerTypes.addProductToCartSuccess: {
      const { products } = action.payload;

      const findProductByIndex = draft.items.findIndex(item =>
        item.products.id === products.id,
      )

      if(findProductByIndex >= 0) {
        draft.items[findProductByIndex].quantity++
      } else {
        draft.items.push({
          products,
            quantity: 1
        })
      }

      break
      }
      case ReducerTypes.addProductToCartFailure: {
        draft.hasNoStock.push(action.payload.productsId);
        break
      }
      default: {
        return state;
      }}
  })
}

export default cart;