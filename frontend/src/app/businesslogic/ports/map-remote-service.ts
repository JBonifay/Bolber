import {Observable} from "rxjs";
import {TiledMap} from "../models/tiled-map";

export abstract class MapRemoteService {
  abstract fetchMap(): Observable<TiledMap>;
}
