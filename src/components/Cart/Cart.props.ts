import { ShoppingItem } from '../../dtos';

export type CartProps = {
  incrementQuantity: (item: ShoppingItem) => void,
  items: ShoppingItem[],
  totalCost: number
};