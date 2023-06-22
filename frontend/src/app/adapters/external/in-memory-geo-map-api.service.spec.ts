import {TestBed} from '@angular/core/testing';

import {InMemoryGeoMapApiService} from './in-memory-geo-map-api.service';
import {GeoMapApi} from "../../businesslogic/ports/geo-map-api";

describe('InMemoryGeoMapApiService', () => {
  let service: GeoMapApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: GeoMapApi, useClass: InMemoryGeoMapApiService}]
    });
    service = TestBed.inject(GeoMapApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
