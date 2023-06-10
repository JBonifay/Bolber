import {TestBed} from '@angular/core/testing';

import {RemoteMapService} from './remote-map.service';
import {InMemoryMapService} from "./in-memory-map.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {Block} from "../domain/models/block";

describe('MapService', () => {
  let service: RemoteMapService;
  let httpTestingController: HttpTestingController
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: RemoteMapService, useClass: RemoteMapService}]
    }).compileComponents();
    service = TestBed.inject(RemoteMapService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should ask map to backend', () => {
    const expectedBlocks: Block[] =
      Array.of(
        new Block("river", 33, 34, 32, 35, "#3185FC"),
        new Block("building", 34, 35, 36, 36, "#d77a61"),
        new Block("building", 36, 38, 36, 37, "#d77a61"),
        new Block("park", 35, 38, 32, 35, "#70A288")
      );


    service.getMap().subscribe(value => {
      expect(value).toEqual(expectedBlocks)
    })

    const req = httpTestingController.expectOne("backend:8080/api/map")
    expect(req.request.method).toEqual('GET');
    req.flush(expectedBlocks);
  });
});
