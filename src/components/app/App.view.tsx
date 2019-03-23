import React from 'react';
import { Shop } from '../../services';
import { Item } from '../../domain';

const App = (props: any) => {
  const { items, itemTypes }: any = props;
  const shop = new Shop(itemTypes, items);

  return (
    <div className='App'>
      <ul>
        {shop.items.map((item: Item) => (
          <li key={item.code}>{item.code}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
