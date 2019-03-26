import { Item, ItemType } from '../../domain';
import { ItemDto, ItemTypeDto } from '../../dtos';

export type AppProps = {
  addItem: (itemDto: ItemDto) => void,
  addItemType: (itemTypeDto: ItemTypeDto) => void,
  items: Item[],
  itemTypes: ItemType[],
  startShop: () => void
};