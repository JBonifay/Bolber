import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GeoMap} from "../../businesslogic/models/geo-map";
import {GeoMapApi} from "../../businesslogic/ports/geo-map-api";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GeoMapApiService implements GeoMapApi {

  constructor(private httpClient: HttpClient) {
  }

  askForMap(): Observable<GeoMap> {
    return this.httpClient.get<GeoMap>("/api/map")
  }
}
