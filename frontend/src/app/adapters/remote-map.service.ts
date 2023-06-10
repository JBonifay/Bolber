import {Injectable} from '@angular/core';
import {IMapManagement} from "../domain/ports/imap-management";
import {Observable} from "rxjs";
import {Block} from "../domain/models/block";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RemoteMapService implements IMapManagement {

  constructor(private httpClient: HttpClient) {
  }

  getMap(): Observable<Block[]> {
    return this.httpClient.get<Block[]>("backend:8080/api/map");
  }
}
