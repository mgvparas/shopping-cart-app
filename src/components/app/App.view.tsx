import React, { Component } from 'react';
import { Item, ItemType } from '../../domain';
import { NumberInput, TextInput } from '../';
import { AppProps } from './App.props';
import { ItemTypeDto } from '../../dtos';

class App extends Component {
  private _itemTypeDto: ItemTypeDto = { code: '' };

  constructor(props: any) {
    super(props);
    this.handleItemTypeFieldChange = this.handleItemTypeFieldChange.bind(this);

    props.startShop();
  }

  private handleItemTypeFieldChange({ target }: React.ChangeEvent<HTMLInputElement>): void {
    this._itemTypeDto = {
      code: target.value
    };
  }

  render() {
    const { addItemType, items, itemTypes }: any = this.props;

    return (
      <div className='App'>
        <h1>Seller</h1>
        <table>
          <thead>
            <tr><th>Item Types</th></tr>
            <tr><th>Code</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><TextInput name="code" onChange={this.handleItemTypeFieldChange}/></td>
              <td>
                <input
                  type="button"
                  value="Add Item Type"
                  onClick={() => addItemType(this._itemTypeDto)}
                  required
                />
              </td>
            </tr>
            {itemTypes.map((itemType: ItemType) => (
              <tr key={itemType.code}>
                <td>{itemType.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
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
              <td><TextInput name="code"/></td>
              <td><NumberInput name="price"/></td>
              <td><TextInput name="type"/></td>
              <td>
                <input
                  type="button"
                  value="Add Item"
                  required
                />
              </td>
            </tr>
            {items.map((item: Item) => (
              <tr key={item.code}>
                <td>{item.code}</td>
                <td>{item.price.value}</td>
                <td>{item.type.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default App;
