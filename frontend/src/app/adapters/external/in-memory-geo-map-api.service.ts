import {Injectable} from '@angular/core';
import {Map} from "../../businesslogic/models/map";
import {GeoMapApi} from "../../businesslogic/ports/geo-map-api";
import {Observable, of} from "rxjs";

@Injectable()
export class InMemoryGeoMapApiService implements GeoMapApi {

  private geoMap: Map = {blocks: Array()};

  constructor() {
  }

  insert(geoMap: Map) {
    this.geoMap = geoMap;
  }

  askForMap(): Observable<Map> {
    return of(this.geoMap);
  }
}
