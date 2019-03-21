import { Coupon, CouponType, Money, Item, ItemType, Percent } from '../domain';
import { CouponDto, ItemDto, ItemTypeDto, ShoppingItem } from '../dtos';
import { CouponCoverage } from '../enums';

class Shop {
  private _items: Item[] = [];
  private _itemTypes: ItemType[] = [];
  private _coupons: Coupon[] = [];

  constructor(itemTypeDtos: ItemTypeDto[], itemDtos: ItemDto[]) {
    this._itemTypes = itemTypeDtos.map((itemTypeDto: ItemTypeDto): ItemType =>
      new ItemType(itemTypeDto.code)
    );

    this._items = itemDtos.map((itemDto: ItemDto): Item => {
      let matchingItemType: ItemType = null;
      for (const itemType of this._itemTypes) {
        if (itemType.code === itemDto.typeCode) {
          matchingItemType = itemType;
        }
      }

      if (matchingItemType !== null) {
        return new Item(
          itemDto.code,
          new Money(itemDto.price),
          matchingItemType
        );
      } else {
        throw new Error(`Unable to find item type with code: ${itemDto.typeCode}`)
      }
    });
  }

  public get items(): Item[] { return this._items; }

  public getTotalCost(shoppingItems: ShoppingItem[], couponCode?: string): number {
    if (couponCode) {
      this.applyCoupon(couponCode);
    }

    let totalPrice: number = 0;
    for (const shoppingItem of shoppingItems) {
      for (const item of this._items) {
        if (item.code === shoppingItem.code) {
          totalPrice += item.discountedPrice.value * shoppingItem.quantity;
        }
      }
    }

    return totalPrice;
  }

  public getItem(code: string): Item {
    let itemMatch: Item;

    for (const item of this._items) {
      if (item.code === code) {
        itemMatch = item;
      }
    }

    if (!itemMatch) {
      throw new Error(`Unable to find item with code: ${code}`);
    }

    return itemMatch;
  }

  public addCoupons(couponDtos: CouponDto[]): void {
    this._coupons.push(...couponDtos.map((couponDto: CouponDto): Coupon => {
      let couponType: CouponType;

      if (couponDto.coverage === CouponCoverage.perItemType) {
        let matchingItemType: ItemType = null;

        for (const itemType of this._itemTypes) {
          if (itemType.code === couponDto.itemTypeCode) {
            matchingItemType = itemType;
          }
        }

        couponType = CouponType.perItemType(matchingItemType);
      } else {
        couponType = CouponType.shopwide();
      }

      return new Coupon(
        couponDto.code,
        new Percent(couponDto.discountPercentage),
        couponType
      );
    }));
  }

  private applyCoupon(couponCode: string): void {
    for (const coupon of this._coupons) {
      if (coupon.code === couponCode) {
        let items: Item[] = this._items;
        if (coupon.type.coverage === CouponCoverage.perItemType) {
          items = this._items.filter((item: Item) => item.type.code == coupon.type.itemType.code);
        }

        for (let item of items) {
          item.setDiscountPercentage(coupon.discountPercentage);
        }
      }
    }
  }
}

export default Shop;