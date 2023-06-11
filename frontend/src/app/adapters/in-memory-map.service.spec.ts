import {TestBed} from '@angular/core/testing';

import {InMemoryMapService} from './in-memory-map.service';
import {IMapManagement} from "../domain/ports/imap-management";
import {Block} from "../domain/models/block";

describe('InMemoryMapService', () => {
  let service: InMemoryMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: IMapManagement, useClass: InMemoryMapService}
      ],
    });
    service = TestBed.inject(IMapManagement) as InMemoryMapService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add blocks', () => {
    service.insert([
      {blockType: "river", xStart: 33, xEnd: 34, yStart: 32, yEnd: 35, color: "#3185FC"},
      {blockType: "building", xStart: 34, xEnd: 35, yStart: 36, yEnd: 36, color: "#d77a61"},
      {blockType: "building", xStart: 36, xEnd: 38, yStart: 36, yEnd: 37, color: "#d77a61"},
      {blockType: "park", xStart: 35, xEnd: 38, yStart: 32, yEnd: 35, color: "#70A288"}
    ]);

    service.getMap().subscribe(value => {
      expect(value.length).toEqual(4);
    })
  });
});
