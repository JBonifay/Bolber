import {TestBed} from '@angular/core/testing';

import {GeoMapApiService} from './geo-map-api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {GeoMapApi} from "../../businesslogic/ports/geo-map-api";
import {GeoMap} from "../../businesslogic/models/geo-map";

describe('GeoMapApiServiceService', () => {
  let service: GeoMapApi;
  let httpTestingController: HttpTestingController
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: GeoMapApi, useClass: GeoMapApiService}]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(GeoMapApi)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should ask map to backend', () => {
    const geoMap: GeoMap =
      {
        blocks: Array([
          {type: "river", color: "#3185FC"},
          {type: "building", color: "#d77a61"},
          {type: "building", color: "#d77a61"},
          {type: "park", color: "#70A288"}
        ]),
      };

    service.askForMap().subscribe(value => {
      expect(value).toEqual(geoMap)
    })

    const req = httpTestingController.expectOne(`/api/map`)
    expect(req.request.method
    ).toEqual('GET');
    req.flush(geoMap);
  });
});
