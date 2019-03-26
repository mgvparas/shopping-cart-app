import { ItemTypeDto } from '../../dtos';
import { itemTypeActions } from '../stateActions';

const initialState: ItemTypeDto[] = [];

export default function(state: ItemTypeDto[] = initialState, action: any) {
  switch (action.type) {
    case itemTypeActions.SET: {
      return [...action.payload];
    }
    default:
      return state;
  }
}