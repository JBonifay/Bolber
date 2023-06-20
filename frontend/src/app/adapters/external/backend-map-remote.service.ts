import {HttpClient} from "@angular/common/http";
import {MapRemoteService} from "../../businesslogic/ports/map-remote-service";
import {Observable} from "rxjs";
import {TiledMap} from "../../businesslogic/models/tiled-map";

export class BackendMapRemoteService implements MapRemoteService {

  constructor(private httpClient: HttpClient) {
  }

  fetchMap(): Observable<TiledMap> {
    return this.httpClient.get<TiledMap>("/api/map");
  }
}
