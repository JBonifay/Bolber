import {Injectable} from '@angular/core';
import {MapApi} from "../../businesslogic/ports/map-api";
import {Observable, of} from "rxjs";
import {Block} from "../../businesslogic/models/block";

@Injectable()
export class InMemoryGeoMapApiService implements MapApi {

  private geoMap: Block[] = Array();

  constructor() {
  }

  insert(blocks: Block[]) {
    this.geoMap = blocks;
  }

  askForMap(): Observable<Block[]> {
    return of(this.geoMap);
  }
}
