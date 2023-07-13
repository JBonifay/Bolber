import {Observable} from "rxjs";
import {SimulationMap} from "../models/simulation-map";

export abstract class SimulationMapApi {
  abstract getSimulationMap(): Observable<SimulationMap>;
}
