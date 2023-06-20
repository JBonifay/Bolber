import {Observable} from "rxjs";
import {MapRemoteService} from "../ports/map-remote-service";
import {TiledMap} from "../models/tiled-map";


export class MapManagementUseCase {
  constructor(private mapRemoteService: MapRemoteService) {

  }

  fetchMap(): Observable<TiledMap> {
    return this.mapRemoteService.fetchMap();
  }

}
