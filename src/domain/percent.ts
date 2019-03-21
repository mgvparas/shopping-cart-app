class Percent {
  private _decimalValue: number;
  private _percentageValue: number;

  constructor(value: number) {
    this._decimalValue = value / 100;
    this._percentageValue = value;
  }

  public get decimalValue(): number { return this._decimalValue; }

  public get percentageValue(): number { return this._percentageValue; }
}

export default Percent;