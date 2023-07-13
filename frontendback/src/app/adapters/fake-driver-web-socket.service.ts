import {Injectable} from '@angular/core';
import {DriverApi} from "../businesslogic/ports/driver-api";
import {Observable, of} from "rxjs";
import {Driver} from "../businesslogic/models/driver";
import {Coordinates} from "../businesslogic/models/coordinates";

@Injectable({
  providedIn: 'root'
})
export class FakeDriverWebSocketService implements DriverApi {

  private driver: Driver[] = [];

  constructor() {
    this.driver.push(new Driver("67342c1f-4e33-47e8-8f55-f2e9c5c0f58c", "Stephen L. Benoit", new Coordinates(0, 0)));
  }

  drivers(): Observable<Driver[]> {
    return of(this.driver);
  }
}
