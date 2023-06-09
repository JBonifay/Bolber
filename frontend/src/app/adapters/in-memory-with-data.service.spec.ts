import {TestBed} from '@angular/core/testing';

import {InMemoryWithDataService} from './in-memory-with-data.service';
import {IMapManagement} from "../domain/ports/imap-management";

describe('InMemoryWithDataService', () => {
  let service: IMapManagement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: IMapManagement, useClass: InMemoryWithDataService}
      ]
    });
    service = TestBed.inject(IMapManagement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
