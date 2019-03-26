import { Item } from '../../domain';

const namespace = 'ITEM';

export const SET = `${namespace}_SET`;
export function set(Items: Item[]) {
  return {
    type: SET,
    payload: Items
  };
}

export default {
  SET,
  set
};