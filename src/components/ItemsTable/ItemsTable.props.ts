import { Item } from '../../domain';
import { ItemDto } from '../../dtos';

export type ItemsTableProps = {
  items: Item[],
  addItem: (itemDto: ItemDto) => void
};