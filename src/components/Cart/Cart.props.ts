import { ShoppingItem } from '../../dtos';

export type CartProps = {
  decrementQuantity: (item: ShoppingItem) => void,
  incrementQuantity: (item: ShoppingItem) => void,
  items: ShoppingItem[],
  totalCost: number
};