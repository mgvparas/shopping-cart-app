import React, { Component } from 'react';
import { Shop } from '../../services';
import { Item, ItemType } from '../../domain';

const NumberInput = ({ name, onChange }: any) => {
  return (
    <input type="number" name={name} id={name} onChange={onChange} required/>
  );
};

const TextInput = ({ name, onChange }: any) => {
  return (
    <input type="text" name={name} id={name} onChange={onChange} required/>
  );
};

class App extends Component<{}, { itemType: any, item: any }> {
  private handleItemTypeFieldChange(event: any): void {
    const { name, value } = event.target;

    this.setState({
      itemType: {
        [name]: value
      }
    });
  }

  private handleItemFieldChange(event: any): void {
    const { name, value } = event.target;

    this.setState({
      item: {
        [name]: value
      }
    });
  }

  render() {
    const { handleAddItemTypeClick, handleAddItemClick, items, itemTypes }: any = this.props;
    const shop = new Shop(itemTypes, items);

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
              <td><TextInput name="code" onChange={(event: any) => this.handleItemTypeFieldChange(event)}/></td>
              <td>
                <input
                  type="button"
                  value="Add Item Type"
                  onClick={() => handleAddItemTypeClick(this.state.itemType)}
                  required
                />
              </td>
            </tr>
            {shop.itemTypes.map((itemType: ItemType) => (
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
              <td><TextInput name="code" onChange={(event: any) => this.handleItemFieldChange(event)}/></td>
              <td><NumberInput name="price" onChange={(event: any) => this.handleItemFieldChange(event)}/></td>
              <td><TextInput name="type" onChange={(event: any) => this.handleItemFieldChange(event)}/></td>
              <td>
                <input
                  type="button"
                  value="Add Item"
                  onClick={() => handleAddItemClick(this.state.item)}
                  required
                />
              </td>
            </tr>
            {shop.items.map((item: Item) => (
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
