import {Injectable} from '@angular/core';
import {IMapManagement} from "../domain/ports/imap-management";
import {Observable} from "rxjs";
import {Block} from "../domain/models/block";
import {HttpClient} from "@angular/common/http";
import {CityMap} from "../domain/models/city-map";

@Injectable()
export class RemoteMapService implements IMapManagement {

  constructor(private httpClient: HttpClient) {
  }

  getCityMap(): Observable<CityMap> {
    return this.httpClient.get<CityMap>(`/api/map`);
  }
}
