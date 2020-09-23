import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStateReducer } from '../../store';

import { addProductoToCartRequest } from '../../store/modules/cart/action';
import { IProducts } from '../../store/modules/cart/types';

interface ICatalogParams {
  product: IProducts;
}

const CatalogItem: React.FC<ICatalogParams> = ({ product }) => {
  const dispatch = useDispatch()

  const noProductAvailable = useSelector<IStateReducer, boolean>(state => {
    return state.cart.hasNoStock.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductoToCartRequest(product))
  }, [dispatch, product])
  
  return (
    <article>
        <strong>{product.title}</strong> {' - '}
        <span>{product.price}</span> {'  '}

        <button 
          type='button' 
          onClick={handleAddProductToCart}
        >
          Comprar
        </button>

        {noProductAvailable && <span style={{color: 'red' }}>Falta de estoque</span>}
      </article>
  );
}

export default CatalogItem;