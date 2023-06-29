import {Injectable} from '@angular/core';
import {ItineraryApi} from "../../businesslogic/ports/itinerary-api";
import {Observable, of} from "rxjs";
import {Coordinates} from "../../businesslogic/models/coordinates";

@Injectable()
export class InMemoryItineraryApiService implements ItineraryApi {

  constructor() {
  }

  shortestPathBetween(from: Coordinates, to: Coordinates): Observable<Coordinates[]> {
    return of([
      new Coordinates(0, 0),
      new Coordinates(1, 0),
      new Coordinates(2, 0),
      new Coordinates(2, 1),
      new Coordinates(2, 2)
    ]);
  }
}
