import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {GeoMap} from "../models/geo-map";
import {GeoMapApi} from "../ports/geo-map-api";

@Injectable(
  {providedIn: "root"}
)
export class GeoMapManagementUseCase {
  constructor(private geoMapApi: GeoMapApi) {

  }

  askForMap(): Observable<GeoMap> {
    return this.geoMapApi.askForMap();
  }

}

