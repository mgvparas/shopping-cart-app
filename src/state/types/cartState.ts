import { ShoppingItem } from '../../dtos';

type CartState = {
  items: ShoppingItem[],
  totalCost: number
};

export default CartState;