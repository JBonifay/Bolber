import {Coordinates} from "./coordinates";

export class Driver {
  driverId: string
  status: string
  coordinates: Coordinates

  constructor(driverId: string, status: string, coordinates: Coordinates) {
    this.driverId = driverId;
    this.status = status;
    this.coordinates = coordinates;
  }

  public update(driver: Driver) {
    this.status = driver.status;
    this.coordinates = driver.coordinates;
  }
}
