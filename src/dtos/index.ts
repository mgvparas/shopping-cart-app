// As to why Type re-exporting looks different, refer to the link below.
// https://github.com/Microsoft/TypeScript/issues/28481#issuecomment-453584716

import CouponDtoType from './couponDto';
import ItemDtoType from './itemDto';
import ItemTypeDtoType from './itemTypeDto';
import ShoppingItemType from './shoppingItem';

export type CouponDto = CouponDtoType;
export type ItemDto = ItemDtoType;
export type ItemTypeDto = ItemTypeDtoType;
export type ShoppingItem = ShoppingItemType;