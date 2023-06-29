import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {MapApi} from "../../businesslogic/ports/map-api";
import {HttpClient} from "@angular/common/http";
import {Block} from "../../businesslogic/models/block";

@Injectable()
export class GeoMapApiService implements MapApi {

  constructor(private httpClient: HttpClient) {
  }

  askForMap(): Observable<Block[]> {
    return this.httpClient.get<Block[]>("/api/map")
  }
}
