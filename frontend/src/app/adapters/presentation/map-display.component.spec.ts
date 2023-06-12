import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MapDisplayComponent} from './map-display.component';
import {InMemoryMapService} from "../external/in-memory-map.service";
import {IMapManagement} from "../../businesslogic/ports/imap-management";

describe('MapDisplayComponent', () => {
  let component: MapDisplayComponent;
  let fixture: ComponentFixture<MapDisplayComponent>;
  let mapService: InMemoryMapService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapDisplayComponent],
      providers: [{provide: IMapManagement, useClass: InMemoryMapService}]
    });
    fixture = TestBed.createComponent(MapDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mapService = TestBed.inject(IMapManagement) as InMemoryMapService
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

