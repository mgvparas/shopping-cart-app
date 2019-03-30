import React from 'react';
import { Item } from '../../domain';
import { BuyerItemsTableProps } from './BuyerItemsTable.props';

const BuyerItemsTable = (props: BuyerItemsTableProps) => {
  return (
    <div className='buyer-items-table'>
      <table>
        <thead>
          <tr><th>Items</th></tr>
          <tr>
            <th>Code</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item: Item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.price.value}</td>
              <td>
                <input
                  type="button"
                  value="Add To Cart"
                  onClick={() => props.addToCart({ code: item.code, quantity: 1 })}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuyerItemsTable;