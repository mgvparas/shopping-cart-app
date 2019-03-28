import { Item, ItemType } from '../../domain';
import { ItemDto } from '../../dtos';

export type ItemsTableProps = {
  items: Item[],
  itemTypes: ItemType[],
  addItem: (itemDto: ItemDto) => void
};