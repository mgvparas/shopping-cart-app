import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Shop } from './services';
import { Item } from './domain';
import logo from './logo.svg';
import './App.css';

function mapStateToProps(state: any) {
  return {
    itemTypes: state.itemTypes,
    items: state.items
  }
}

class App extends Component {
  private _shop: Shop;

  constructor(props: any) {
    super(props);

    this._shop = new Shop(props.itemTypes, props.items);
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
          <ul>
            { this._shop.items.map((item: Item) => <li key={item.code}>{item.code}</li>) }
          </ul>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
