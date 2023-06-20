import {Observable} from "rxjs";
import {Block} from "../models/block";

export abstract class MapRemoteService {
  abstract fetchMap(): Observable<Block[]>;
}
