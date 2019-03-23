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
      const matchingItemType: ItemType | undefined = this._itemTypes
        .find((itemType: ItemType) => itemType.code === itemDto.typeCode);

      if (!matchingItemType) throw new Error(`Item Type with code ${itemDto.typeCode} not found.`);

      return new Item(
        itemDto.code,
        new Money(itemDto.price),
        matchingItemType || new ItemType('TEST')
      );
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
    const itemMatch: Item | undefined = this._items.find((item: Item) => item.code === code);

    if (!itemMatch) throw new Error(`Item with code ${code} not found.`);

    return itemMatch;
  }

  public addCoupons(couponDtos: CouponDto[]): void {
    this._coupons.push(...couponDtos.map((couponDto: CouponDto): Coupon => {
      let couponType: CouponType;

      if (couponDto.coverage === CouponCoverage.perItemType) {

        const matchingItemType: ItemType | undefined = this._itemTypes
          .find((itemType: ItemType) => itemType.code === couponDto.itemTypeCode);

        if (!matchingItemType) throw new Error(`Item Type with code ${couponDto.itemTypeCode} not found.`);

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
    const matchingCoupon: Coupon | undefined = this._coupons.find((coupon: Coupon) => coupon.code === couponCode);

    if (!matchingCoupon) throw new Error(`Coupon with code ${couponCode} not found.`);

    let items: Item[] = this._items;
    if (matchingCoupon.type.coverage === CouponCoverage.perItemType) {
      const itemType: ItemType | undefined = matchingCoupon.type.itemType;

      if (!itemType) throw new Error('Per Item Type coupons must have an Item Type');

      items = this._items.filter((item: Item) => item.type.code == itemType.code);
    }

    for (let item of items) {
      item.setDiscountPercentage(matchingCoupon.discountPercentage);
    }
  }
}

export default Shop;