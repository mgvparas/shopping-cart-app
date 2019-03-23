import { CouponType, Percent } from '.';

class Coupon {
  private _code: string;
  private _discountPercentage: Percent;
  private _type: CouponType;

  constructor(code: string, discountPercentage: Percent, type: CouponType) {
    this._code = code;
    this._discountPercentage = discountPercentage;
    this._type = type;
  }

  public get code(): string { return this._code; }

  public get discountPercentage(): Percent { return this._discountPercentage; }

  public get type(): CouponType { return this._type; }
}

export default Coupon;