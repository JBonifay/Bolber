import {TestBed} from '@angular/core/testing';

import {BackendMapRemoteService} from './backend-map-remote.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {TiledMap} from "../../businesslogic/models/tiled-map";

describe('BackendMapRemoteService', () => {
  let service: BackendMapRemoteService;
  let httpTestingController: HttpTestingController
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    service = new BackendMapRemoteService(httpClient)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should ask map to backend', () => {
    const cityMap: TiledMap =
      {
        gridCount: 50,
        blocks: [
          {blockType: "river", xStart: 33, xEnd: 34, yStart: 32, yEnd: 35, color: "#3185FC"},
          {blockType: "building", xStart: 34, xEnd: 35, yStart: 36, yEnd: 36, color: "#d77a61"},
          {blockType: "building", xStart: 36, xEnd: 38, yStart: 36, yEnd: 37, color: "#d77a61"},
          {blockType: "park", xStart: 35, xEnd: 38, yStart: 32, yEnd: 35, color: "#70A288"}
        ]
      };

    service.fetchMap().subscribe(value => {
      expect(value).toEqual(cityMap)
    })

    const req = httpTestingController.expectOne(`/api/map`)
    expect(req.request.method
    ).toEqual('GET');
    req.flush(cityMap);
  })
  ;

});
