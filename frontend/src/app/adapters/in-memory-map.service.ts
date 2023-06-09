import {Injectable} from '@angular/core';
import {IMapManagement} from "../domain/ports/imap-management";
import {Observable, of} from "rxjs";
import {Block} from "../domain/models/block";

@Injectable()
export class InMemoryMapService implements IMapManagement {

  private blocks: Block[] = Array();

  constructor() {
  }

  insert(blocks: Block[]) {
    this.blocks.push(...blocks);
  }

  getMap(): Observable<Block[]> {
    return of(this.blocks);
  }


}
