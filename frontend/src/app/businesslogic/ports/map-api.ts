import {Observable} from "rxjs";
import {Block} from "../models/block";

export abstract class MapApi {
  abstract askForMap(): Observable<Block[]>;
}
