class ItemType {
  private _code: string;

  constructor(code: string) {
    this._code = code;
  }

  public get code(): string { return this._code; }
}

export default ItemType;