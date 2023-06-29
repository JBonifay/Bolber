import {Injectable} from '@angular/core';
import {MapApi} from "../../businesslogic/ports/map-api";
import {Observable, of} from "rxjs";
import {Block} from "../../businesslogic/models/block";

@Injectable({
  providedIn: 'root'
})
export class InMemoryWithDataGeoMapApiService implements MapApi {

  private data: Block[] = [];

  constructor() {
    let blockPerSides = 50;
    for (let b = 0; b < blockPerSides; b++) {
      this.data.push({
        "blockType": "ROAD",
        "color": "#f5f5f5",
        "x": b,
        "y": b
      })
    }
  }

  askForMap(): Observable<Block[]> {
    return of(this.data);
  }

}
