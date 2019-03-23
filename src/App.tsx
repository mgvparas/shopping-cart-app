import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Shop } from './services';

class App extends Component {
  private _shop: Shop;

  constructor(props: any) {
    super(props);

    this._shop = new Shop(
      [{ code: 'fruit' }],
      [{ code: 'banana', price: 10, typeCode: 'fruit' }]
    );
  }

  render() {
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
          <p>
          {
            this._shop.getItem('banana')
              ? this._shop.getItem('banana').code
              : 'no banana'
          }
          </p>
        </header>
      </div>
    );
  }
}

export default App;
