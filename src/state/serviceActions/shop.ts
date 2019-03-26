import { ItemTypeDto, ItemDto } from '../../dtos';
import { Shop } from '../../services';
import { itemActions, itemTypeActions } from '../stateActions';

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

export function startShop() {
  return (dispatch: any, getState: Function, { shop }: { shop: Shop }) => {
    dispatch(itemActions.set(shop.items));
    dispatch(itemTypeActions.set(shop.itemTypes));
  };
}

export default {
  addItem,
  addItemType,
  startShop
};