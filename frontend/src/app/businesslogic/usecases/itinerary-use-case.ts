import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ItineraryApi} from "../ports/itinerary-api";
import {Coordinates} from "../models/coordinates";

@Injectable(
  {providedIn: "root"}
)
export class ItineraryUseCase {
  constructor(private itineraryApiService: ItineraryApi) {

  }

  askForShortestPathBetween(from: Coordinates, to: Coordinates): Observable<Coordinates[]> {
    return this.itineraryApiService.shortestPathBetween(from, to);
  }

}
