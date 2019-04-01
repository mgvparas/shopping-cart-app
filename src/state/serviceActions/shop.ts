import { ItemTypeDto, ItemDto, ShoppingItem } from '../../dtos';
import { Shop } from '../../services';
import { cartActions, itemActions, itemTypeActions } from '../stateActions';
import { Item } from '../../domain';

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
    const itemMatch = getState().cart.items.find((item: Item) => item.code === shoppingItem.code);
    if (itemMatch) {
      dispatch(cartActions.incrementQuantity(shoppingItem))
    } else {
      dispatch(cartActions.addItem(shoppingItem));
    }
  };
}

export function computeTotalCost() {
  return (dispatch: any, getState: Function, { shop }: { shop: Shop }) => {
    const { cart } = getState();
    const totalCost: number = shop.getTotalCost(cart.items);

    dispatch(cartActions.setTotalCost(totalCost));
  }
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
  computeTotalCost,
  startShop
};