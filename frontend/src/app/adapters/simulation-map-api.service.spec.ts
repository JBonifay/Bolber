import {TestBed} from '@angular/core/testing';

import {SimulationMapApiService} from './simulation-map-api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {SimulationMapApi} from "../businesslogic/ports/simulation-map-api";
import {SimulationMap} from "../businesslogic/models/simulation-map";

describe('SimulationMapApiServiceService', () => {
  let service: SimulationMapApi;
  let httpTestingController: HttpTestingController
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: SimulationMapApi, useClass: SimulationMapApiService}]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(SimulationMapApi)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should ask map to backend', () => {
    const map: SimulationMap = {
      blocks:
        [
          {"blockType": "ROAD", "color": "#f5f5f5", "x": 0, "y": 0},
          {"blockType": "ROAD", "color": "#f5f5f5", "x": 1, "y": 0},
          {"blockType": "ROAD", "color": "#f5f5f5", "x": 2, "y": 0},
          {"blockType": "ROAD", "color": "#f5f5f5", "x": 3, "y": 0},
          {"blockType": "ROAD", "color": "#f5f5f5", "x": 4, "y": 0}
        ]
    }

    service.getSimulationMap().subscribe(value => {
      expect(value).toEqual(map)
    })

    const req = httpTestingController.expectOne(`/api/map`)
    expect(req.request.method
    ).toEqual('GET');
    req.flush(map);
  });
})
;
