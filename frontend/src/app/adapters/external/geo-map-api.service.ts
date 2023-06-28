import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Map} from "../../businesslogic/models/map";
import {GeoMapApi} from "../../businesslogic/ports/geo-map-api";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GeoMapApiService implements GeoMapApi {

  constructor(private httpClient: HttpClient) {
  }

  askForMap(): Observable<Map> {
    return this.httpClient.get<Map>("/api/map")
  }
}
