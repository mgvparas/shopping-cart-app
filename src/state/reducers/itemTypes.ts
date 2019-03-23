import { ItemTypeDto } from '../../dtos';
import { itemTypeActions } from '../actions';

const initialState: ItemTypeDto[] = [
  { code: 'fruit' },
  { code: 'vegetable' },
  { code: 'meat' }
];

export default function(state: ItemTypeDto[] = initialState, action: any) {
  switch (action.type) {
    case itemTypeActions.ADD_ITEM_TYPE: {
      return [
        ...state,
        action.payload
      ];
    }
    default:
      return state;
  }
}