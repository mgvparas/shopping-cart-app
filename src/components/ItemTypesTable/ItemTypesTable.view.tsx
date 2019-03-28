import React, { useState } from 'react';
import { ItemTypesTableProps } from './ItemTypesTable.props';
import { TextInput } from '..';
import { ItemType } from '../../domain';

function ItemTypesTable(props: ItemTypesTableProps) {
  const [code, setCode] = useState('');

  return (
    <table>
      <thead>
        <tr><th>Item Types</th></tr>
        <tr><th>Code</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><TextInput name="code" onChange={(e) => setCode(e.target.value)}/></td>
          <td>
            <input type="button" value="Add Item Type" onClick={() => props.addItemType({ code })}/>
          </td>
        </tr>
        {props.itemTypes.map((itemType: ItemType) => (
          <tr key={itemType.code}>
            <td>{itemType.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemTypesTable;