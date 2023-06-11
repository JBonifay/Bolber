import {Injectable} from '@angular/core';
import {IMapManagement} from "../domain/ports/imap-management";
import {Observable, of} from "rxjs";
import {Block} from "../domain/models/block";
import {CityMap} from "../domain/models/city-map";

@Injectable()
export class InMemoryMapService implements IMapManagement {

  private sideSize: number = 0;
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
