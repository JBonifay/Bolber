import {Injectable} from '@angular/core';
import {GeoMap} from "../../businesslogic/models/geo-map";
import {GeoMapApi} from "../../businesslogic/ports/geo-map-api";
import {Observable, of} from "rxjs";

@Injectable()
export class InMemoryGeoMapApiService implements GeoMapApi {

  private geoMap: GeoMap = {blocks: Array()};

  constructor() {
  }

  insert(geoMap: GeoMap) {
    this.geoMap = geoMap;
  }

  askForMap(): Observable<GeoMap> {
    return of(this.geoMap);
  }
}
