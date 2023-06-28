import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Map} from "../models/map";
import {GeoMapApi} from "../ports/geo-map-api";

@Injectable(
  {providedIn: "root"}
)
export class GeoMapManagementUseCase {
  constructor(private geoMapApi: GeoMapApi) {

  }

  askForMap(): Observable<Map> {
    return this.geoMapApi.askForMap();
  }

}

