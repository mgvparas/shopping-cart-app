import { ItemType, Money, Percent } from './';

class Item {
  private _code: string;
  private _price: Money;
  private _discountedPrice: Money;
  private _type: ItemType;

  constructor(code: string, price: Money, type: ItemType) {
    this._code = code;
    this._price = price;
    this._discountedPrice = price;
    this._type = type;
  }

  public get code(): string { return this._code; }

  public get price(): Money { return this._price; }

  public get discountedPrice(): Money { return this._discountedPrice; }

  public get type(): ItemType { return this._type; }

  public setDiscountPercentage(percentage: Percent): void {
    const discountAmount: number = this.price.value * percentage.decimalValue;

    this.applyDiscount(discountAmount);
  }

  public setDiscountAmount(amount: Money): void {
    this.applyDiscount(amount.value);
  }

  private applyDiscount(discountAmount: number): void {
    const newDiscountedPrice: number = this._price.value - discountAmount;

    if (newDiscountedPrice < this._discountedPrice.value) {
      this._discountedPrice = new Money(newDiscountedPrice)
    }
  }
}

export default Item;