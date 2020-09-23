import React from 'react';
import { useSelector } from 'react-redux';
import { IStateReducer } from '../../store';
import { ICartProducts } from '../../store/modules/cart/types';

const CartComponent: React.FC = () => {
  const cart = useSelector<IStateReducer, ICartProducts[]>(state => state.cart.items)

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {cart.map(item => (
          <tr key={item.products.id}>
            <td>{item.products.title}</td>
            <td>{item.products.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.products.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartComponent;