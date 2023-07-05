import {Observable} from "rxjs";
import {SimulationMap} from "../models/simulation-map";

export abstract class MapApi {
  abstract askForMap(): Observable<SimulationMap>;
}
