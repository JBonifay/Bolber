import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SimulationMapApi} from "../businesslogic/ports/simulation-map-api";
import {SimulationMap} from "../businesslogic/models/simulation-map";

@Injectable()
export class SimulationMapApiService implements SimulationMapApi {

  constructor(private httpClient: HttpClient) {
  }

  getSimulationMap(): Observable<SimulationMap> {
    return this.httpClient.get<SimulationMap>("/api/map")
  }
}
