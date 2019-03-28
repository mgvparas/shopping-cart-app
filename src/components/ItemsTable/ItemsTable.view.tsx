import React, { useState } from 'react';
import { NumberInput, SelectInput, TextInput } from '..';
import { Item, ItemType } from '../../domain';
import { ItemsTableProps } from './ItemsTable.props';

function ItemsTable(props: ItemsTableProps) {
  const [code, setCode] = useState('');
  const [price, setPrice] = useState(0);
  const [typeCode, setTypeCode] = useState('');

  return(
    <table>
      <thead>
        <tr><th>Items</th></tr>
        <tr>
          <th>Code</th>
          <th>Price</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><TextInput name="code" onChange={(e) => setCode(e.target.value)}/></td>
          <td><NumberInput name="price" onChange={(e) => setPrice(+e.target.value)}/></td>
          <td>
            <SelectInput
              name="type"
              options={props.itemTypes.map((type: ItemType) => ({ label: type.code, value: type.code }))}
              onChange={(e) => setTypeCode(e.target.value)}
            />
          </td>
          <td>
            <input type="button" value="Add Item" onClick={() => props.addItem({ code, price, typeCode })}/>
          </td>
        </tr>
        {props.items.map((item: Item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>{item.price.value}</td>
            <td>{item.type.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemsTable;