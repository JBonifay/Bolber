import {Injectable} from '@angular/core';
import {IMapManagement} from "../domain/ports/imap-management";
import {Observable, of} from "rxjs";
import {Block} from "../domain/models/block";

@Injectable()
export class InMemoryWithDataService implements IMapManagement {

  private blocks: Block[] = Array(
    new Block("river", 0, 1, 0, 1, "#3185FC")
  );

  constructor() {
  }

  getMap(): Observable<Block[]> {
    return of(this.blocks);
  }
}
