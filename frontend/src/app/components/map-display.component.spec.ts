import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MapDisplayComponent} from './map-display.component';
import {IMapManagement} from "../domain/ports/imap-management";
import {InMemoryMapService} from "../adapters/in-memory-map.service";

describe('MapDisplayComponent', () => {
  let component: MapDisplayComponent;
  let fixture: ComponentFixture<MapDisplayComponent>;
  let mapService: IMapManagement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapDisplayComponent],
      providers: [{provide: IMapManagement, useClass: InMemoryMapService}]
    });
    fixture = TestBed.createComponent(MapDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mapService = TestBed.inject(IMapManagement)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

