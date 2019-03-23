import { ItemTypeDto } from '../../dtos';

const namespace = 'ITEM_TYPE';

export const ADD_ITEM_TYPE = `${namespace}/ADD_ITEM_TYPE`;
export function addItemType(itemTypeDto: ItemTypeDto) {
  return {
    type: ADD_ITEM_TYPE,
    payload: itemTypeDto
  };
}

export default {
  ADD_ITEM_TYPE,
  addItemType
};