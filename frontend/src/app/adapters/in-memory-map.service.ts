import {Injectable} from '@angular/core';
import {IMapManagement} from "../domain/ports/imap-management";
import {Observable, of} from "rxjs";
import {Block} from "../domain/models/block";

@Injectable()
export class InMemoryMapService implements IMapManagement {
  constructor() {
  }

  getMap(): Observable<Block[]> {
    return of();
  }


}
