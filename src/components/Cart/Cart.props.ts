import { ShoppingItem } from '../../dtos';

export type CartProps = {
  items: ShoppingItem[],
  totalCost: number
};