import { ItemTypeDto, ItemDto, ShoppingItem } from '../../dtos';
import { Shop } from '../../services';
import { cartActions, itemActions, itemTypeActions } from '../stateActions';

export function addItem(itemDto: ItemDto) {
  return (dispatch: any, getState: Function, { shop }: { shop: Shop }) => {
    shop.addItem(itemDto);

    dispatch(itemActions.set(shop.items));
  };
}

export function addItemType(itemTypeDto: ItemTypeDto) {
  return (dispatch: any, getState: Function, { shop }: { shop: Shop }) => {
    shop.addItemType(itemTypeDto);

    dispatch(itemTypeActions.set(shop.itemTypes));
  };
}

export function addToCart(shoppingItem: ShoppingItem) {
  return (dispatch: any, getState: Function, { shop }: { shop: Shop }) => {
    dispatch(cartActions.addItem(shoppingItem));
  }
}

export function getTotalCost(shoppingItems: ShoppingItem[]) {
  return (dispatch: any, getState: Function, { shop }: { shop: Shop }) => {
    getState()
    const totalCost: number = shop.getTotalCost(shoppingItems);

    dispatch(cartActions.setTotalCost(totalCost));
  };
}

export function startShop() {
  return (dispatch: any, getState: Function, { shop }: { shop: Shop }) => {
    dispatch(itemActions.set(shop.items));
    dispatch(itemTypeActions.set(shop.itemTypes));
  };
}

export default {
  addItem,
  addItemType,
  addToCart,
  startShop
};