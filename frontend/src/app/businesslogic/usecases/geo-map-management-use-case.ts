import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MapApi} from "../ports/map-api";
import {SimulationMap} from "../models/simulation-map";

@Injectable(
  {providedIn: "root"}
)
export class GeoMapManagementUseCase {
  constructor(private geoMapApi: MapApi) {

  }

  askForMap(): Observable<SimulationMap> {
    return this.geoMapApi.askForMap();
  }

}

