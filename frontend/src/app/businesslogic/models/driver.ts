import {Coordinates} from "./coordinates";

export class Driver {

  private readonly _driverId: string
  private readonly _driverName: string
  private readonly _startingCoordinates: Coordinates

  constructor(driverId: string, driverName: string, startingCoordinates: Coordinates) {
    this._driverId = driverId;
    this._driverName = driverName;
    this._startingCoordinates = startingCoordinates;
  }


  get driverId(): string {
    return this._driverId;
  }

  get driverName(): string {
    return this._driverName;
  }

  get startingCoordinates(): Coordinates {
    return this._startingCoordinates;
  }
}
