import {Observable} from "rxjs";
import {GeoMap} from "../models/geo-map";

export abstract class GeoMapApi {
  abstract askForMap(): Observable<GeoMap>;
}
