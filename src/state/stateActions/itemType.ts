import { ItemType } from '../../domain';

const namespace = 'ITEM_TYPE';

export const SET = `${namespace}_SET`;
export function set(itemTypes: ItemType[]) {
  return {
    type: SET,
    payload: itemTypes
  };
}

export default {
  SET,
  set
};