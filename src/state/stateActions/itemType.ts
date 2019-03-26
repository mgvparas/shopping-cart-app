import { ItemTypeDto } from '../../dtos';

const namespace = 'ITEM_TYPE';

export const SET = `${namespace}_SET`;
export function set(itemTypeDtos: ItemTypeDto[]) {
  return {
    type: SET,
    payload: itemTypeDtos
  };
}

export default {
  SET,
  set
};