import { Item } from '../../domain';
import { ShoppingItem } from '../../dtos';

export type BuyerItemsTableProps = {
  addToCart: (shoppingItem: ShoppingItem) => void,
  items: Item[]
};