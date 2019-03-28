import { cartActions } from '../stateActions';
import { CartState } from '../types';

const initialState: CartState = {
  items: [],
  totalCost: 0
};

export default function(state: CartState = initialState, action: any) {
  switch (action.type) {
    case cartActions.SET_TOTAL_COST: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}