import React, { useEffect } from 'react';
import { ItemTypesTable, ItemsTable } from '..';
import { AppProps } from './App.props';

function App(props: AppProps) {
  useEffect(() => {
    props.startShop();
  });

  return (
    <div className='App'>
      <h1>Seller</h1>
      <ItemTypesTable />
      <br/>
      <ItemsTable />
    </div>
  );
}

export default App;
