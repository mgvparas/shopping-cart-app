import { ItemType } from '../../domain';
import { ItemTypeDto } from '../../dtos';

export type ItemTypesTableProps = {
  itemTypes: ItemType[],
  addItemType: (itemTypeDto: ItemTypeDto) => void,
};