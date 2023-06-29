import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MapApi} from "../ports/map-api";
import {Block} from "../models/block";

@Injectable(
  {providedIn: "root"}
)
export class GeoMapManagementUseCase {
  constructor(private geoMapApi: MapApi) {

  }

  askForMap(): Observable<Block[]> {
    return this.geoMapApi.askForMap();
  }

}

