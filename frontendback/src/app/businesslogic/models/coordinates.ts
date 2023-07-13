export class Coordinates {

  private readonly _horizontal: number;
  private readonly _vertical: number;

  constructor(horizontal: number, vertical: number) {
    this._vertical = vertical;
    this._horizontal = horizontal;
  }

  get horizontal(): number {
    return this._horizontal;
  }

  get vertical(): number {
    return this._vertical;
  }
}
