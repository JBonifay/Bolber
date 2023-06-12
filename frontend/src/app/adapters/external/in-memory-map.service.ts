import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Block} from "../../businesslogic/models/block";
import {CityMap} from "../../businesslogic/models/city-map";
import {IMapManagement} from "../../businesslogic/ports/imap-management";

@Injectable()
export class InMemoryMapService implements IMapManagement {

  private blocks: Block[] = Array();

  constructor() {
  }

  insert(blocks: Block[]) {
    this.blocks.push(...blocks);
  }

  getCityMap(): Observable<CityMap> {
    return of({blocksPerSide: 50, blocks: this.blocks});
  }


}
