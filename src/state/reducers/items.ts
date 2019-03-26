import { ItemDto } from '../../dtos';
import { itemActions } from '../stateActions';

const initialState: ItemDto[] = [];

export default function(state: ItemDto[] = initialState, action: any) {
  switch (action.type) {
    case itemActions.SET: {
      return [...action.payload];
    }
    default:
      return state;
  }
}