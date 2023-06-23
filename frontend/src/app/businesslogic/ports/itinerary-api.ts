import {Observable} from "rxjs";
import {Coordinates} from "../models/coordinates";

export interface ItineraryApi {
  shortestPathBetween(from: Coordinates, to: Coordinates): Observable<Coordinates[]>;
}
