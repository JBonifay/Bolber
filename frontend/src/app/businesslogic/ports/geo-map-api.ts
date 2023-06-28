import {Observable} from "rxjs";
import {Map} from "../models/map";

export abstract class GeoMapApi {
  abstract askForMap(): Observable<Map>;
}
