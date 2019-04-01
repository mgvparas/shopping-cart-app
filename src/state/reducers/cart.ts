import { cartActions } from '../stateActions';
import { CartState } from '../types';
import ShoppingItem from '../../dtos/shoppingItem';

const initialState: CartState = {
  items: [],
  totalCost: 0
};

export default function(state: CartState = initialState, action: any) {
  switch (action.type) {
    case cartActions.ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    case cartActions.DECREMENT_QUANTITY: {
      const updatedItems = state.items.map((item: ShoppingItem) => {
        return item.code === action.payload.code
          ? { code: item.code, quantity: --item.quantity }
          : item;
      });

      return {
        ...state,
        items: updatedItems
      };
    }
    case cartActions.INCREMENT_QUANTITY: {
      const updatedItems = state.items.map((item: ShoppingItem) => {
        return item.code === action.payload.code
          ? { code: item.code, quantity: ++item.quantity }
          : item;
      });

      return {
        ...state,
        items: updatedItems
      };
    }
    case cartActions.SET_TOTAL_COST: {
      return {
        ...state,
        totalCost: action.payload
      };
    }
    default:
      return state;
  }
}