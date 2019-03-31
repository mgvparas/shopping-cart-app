import { ShoppingItem } from '../../dtos';

const namespace = 'CART';

const ADD_ITEM = `${namespace}/ADD_ITEM`;
function addItem(shoppingItem: ShoppingItem) {
  return {
    type: ADD_ITEM,
    payload: shoppingItem
  }
}

const INCREMENT_QUANTITY = `${namespace}/INCREMENT_QUANTITY`;
function incrementQuantity(shoppingItem: ShoppingItem) {
  return {
    type: INCREMENT_QUANTITY,
    payload: shoppingItem
  }
}

const SET_TOTAL_COST = `${namespace}/SET_TOTAL_COST`;
function setTotalCost(totalCost: number) {
  return {
    type: SET_TOTAL_COST,
    payload: totalCost
  }
}

export default {
  ADD_ITEM,
  addItem,
  INCREMENT_QUANTITY,
  incrementQuantity,
  SET_TOTAL_COST,
  setTotalCost
};