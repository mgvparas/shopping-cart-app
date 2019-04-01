import React from 'react';
import { CartProps } from './Cart.props';
import { ShoppingItem } from '../../dtos';

const Cart = (props: CartProps) => {
  return (
    <div className='cart'>
      <table>
        <thead>
          <tr><th>Cart</th></tr>
          <tr>
            <th>Code</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item: ShoppingItem) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>
                <button>-</button>
                {item.quantity}
                <button onClick={() => props.incrementQuantity(item)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total Cost: {props.totalCost}</h4>
    </div>
  );
};

export default Cart;