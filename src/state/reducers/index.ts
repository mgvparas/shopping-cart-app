import { combineReducers } from 'redux';
import itemTypes from './itemTypes';
import items from './items';

export default combineReducers({
  items,
  itemTypes,
});
