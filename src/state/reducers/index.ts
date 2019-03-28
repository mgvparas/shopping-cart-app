import { combineReducers } from 'redux';
import cart from './cart';
import itemTypes from './itemTypes';
import items from './items';

export default combineReducers({
  cart,
  items,
  itemTypes,
});
