import { ItemTypeDto } from '../../dtos';
import { Shop } from '../../services';
import { itemTypeActions } from '../stateActions';

export function addItemType(itemTypeDto: ItemTypeDto) {
  return (dispatch: any, getState: Function, { shop }: { shop: Shop }) => {
    shop.addItemType(itemTypeDto);

    dispatch(itemTypeActions.set(shop.itemTypes));
  };
}

export function startShop() {
  return (dispatch: any, getState: Function, { shop }: { shop: Shop }) => {
    dispatch(itemTypeActions.set(shop.itemTypes));
  };
}

export default {
  addItemType,
  startShop
};