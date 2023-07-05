import {Injectable} from '@angular/core';
import {MapApi} from "../../businesslogic/ports/map-api";
import {Observable, of} from "rxjs";
import {Block} from "../../businesslogic/models/block";
import {SimulationMap} from "../../businesslogic/models/simulation-map";

@Injectable()
export class InMemoryGeoMapApiService implements MapApi {

  private geoMap: Block[] = Array();

  constructor() {
  }

  insert(blocks: Block[]) {
    this.geoMap = blocks;
  }

  askForMap(): Observable<SimulationMap> {
    return of({blocks: this.geoMap});
  }
}
