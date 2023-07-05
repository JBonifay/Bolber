import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {MapApi} from "../../businesslogic/ports/map-api";
import {HttpClient} from "@angular/common/http";
import {Block} from "../../businesslogic/models/block";
import {SimulationMap} from "../../businesslogic/models/simulation-map";

@Injectable()
export class GeoMapApiService implements MapApi {

  constructor(private httpClient: HttpClient) {
  }

  askForMap(): Observable<SimulationMap> {
    return this.httpClient.get<SimulationMap>("/api/map")
  }
}
