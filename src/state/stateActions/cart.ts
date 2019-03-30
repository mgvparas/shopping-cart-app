import { ShoppingItem } from '../../dtos';

const namespace = 'CART';

const SET_TOTAL_COST = `${namespace}/SET_TOTAL_COST`;
function setTotalCost(totalCost: number) {
  return {
    type: SET_TOTAL_COST,
    payload: totalCost
  }
}

const ADD_ITEM = `${namespace}/ADD_ITEM`;
function addItem(shoppingItem: ShoppingItem) {
  return {
    type: ADD_ITEM,
    payload: shoppingItem
  }
}

export default {
  ADD_ITEM,
  addItem,
  SET_TOTAL_COST,
  setTotalCost
};