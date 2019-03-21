import { ItemType } from '../domain';
import { CouponCoverage } from '../enums';

class CouponType {
  private _itemType: ItemType | undefined;
  private _coverage: CouponCoverage;

  private constructor(coverage: CouponCoverage, itemType?: ItemType) {
    this._coverage = coverage;
    this._itemType = itemType;
  }

  public static perItemType(itemType: ItemType): CouponType {
    return new CouponType(
      CouponCoverage.perItemType,
      itemType
    );
  }

  public static shopwide(): CouponType {
    return new CouponType(
      CouponCoverage.shopwide
    );
  }

  public get itemType(): ItemType | undefined { return this._itemType; }

  public get coverage(): CouponCoverage { return this._coverage; }
}

export default CouponType;