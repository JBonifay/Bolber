import {TestBed} from '@angular/core/testing';

import {GeoMapApiService} from './geo-map-api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {MapApi} from "../../businesslogic/ports/map-api";
import {Block} from "../../businesslogic/models/block";

describe('GeoMapApiServiceService', () => {
  let service: MapApi;
  let httpTestingController: HttpTestingController
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: MapApi, useClass: GeoMapApiService}]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(MapApi)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should ask map to backend', () => {
    const map: Block[] =
      [
        {"blockType": "ROAD", "color": "#f5f5f5", "x": 0, "y": 0},
        {"blockType": "ROAD", "color": "#f5f5f5", "x": 1, "y": 0},
        {"blockType": "ROAD", "color": "#f5f5f5", "x": 2, "y": 0},
        {"blockType": "ROAD", "color": "#f5f5f5", "x": 3, "y": 0},
        {"blockType": "ROAD", "color": "#f5f5f5", "x": 4, "y": 0}
      ];

    service.askForMap().subscribe(value => {
      expect(value).toEqual(map)
    })

    const req = httpTestingController.expectOne(`/api/map`)
    expect(req.request.method
    ).toEqual('GET');
    req.flush(map);
  });
})
;
