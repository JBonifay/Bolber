import {Injectable} from '@angular/core';
import {IMapManagement} from "../../businesslogic/ports/imap-management";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CityMap} from "../../businesslogic/models/city-map";

@Injectable()
export class RemoteMapService implements IMapManagement {

  constructor(private httpClient: HttpClient) {
  }

  getCityMap(): Observable<CityMap> {
    return this.httpClient.get<CityMap>(`/api/map`);
  }
}
