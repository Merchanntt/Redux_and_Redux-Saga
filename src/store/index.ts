import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import CreateSagaMiddleware from 'redux-saga';

import { ICartItems } from './modules/cart/types';

import RootReducer from './modules/RootReducer';
import RootSaga from './modules/RootSaga';

export interface IStateReducer {
  cart: ICartItems
}

const SagaMiddleware = CreateSagaMiddleware();

const midleware = [SagaMiddleware]

const store = createStore(
    RootReducer,
    composeWithDevTools(
      applyMiddleware(...midleware)
    )
  )

  SagaMiddleware.run(RootSaga)

export default store;