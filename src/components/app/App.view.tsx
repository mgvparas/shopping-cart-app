import React, { Component } from 'react';
import { Shop } from '../../services';
import { Item } from '../../domain';
import logo from './assets/logo.svg';
import './App.css';

const App = (props: any) => {
  const { items, itemTypes }: any = props;
  const shop = new Shop(itemTypes, items);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {shop.items.map((item: Item) => <li key={item.code}>{item.code}</li>)}
        </ul>
      </header>
    </div>
  );
};

export default App;
