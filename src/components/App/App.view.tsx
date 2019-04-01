import React, { useEffect } from 'react';
import { BuyerItemsTable, Cart, ItemsTable, ItemTypesTable } from '..';
import { AppProps } from './App.props';
import './App.style.css';

function App(props: AppProps) {
  useEffect(() => {
    props.startShop();
  });

  return (
    <div className='app'>
      <div className='seller'>
        <h1>Sell</h1>
        <ItemTypesTable />
        <br/>
        <ItemsTable />
      </div>
      <div className='buyer'>
        <h1>Buy</h1>
        <BuyerItemsTable />
        <hr/>
        <Cart />
      </div>
    </div>
  );
}

export default App;
