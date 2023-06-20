import {HttpClient} from "@angular/common/http";
import {MapRemoteService} from "../../businesslogic/ports/map-remote-service";
import {Observable} from "rxjs";
import {Block} from "../../businesslogic/models/block";

export class BackendMapRemoteService implements MapRemoteService {

  constructor(private httpClient: HttpClient) {
  }

  fetchMap(): Observable<Block[]> {
    return this.httpClient.get<Block[]>("https://joffreybonifay.fr/api/map");
  }
}
