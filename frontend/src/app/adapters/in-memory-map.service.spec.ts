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
    service.insert(Array.of(
      new Block("river", 33, 34, 32, 35, "#3185FC"),
      new Block("building", 34, 35, 36, 36, "#d77a61"),
      new Block("building", 36, 38, 36, 37, "#d77a61"),
      new Block("park", 35, 38, 32, 35, "#70A288")
    ));

    service.getMap().subscribe(value => {
      expect(value.length).toEqual(4);
    })
  });
});
