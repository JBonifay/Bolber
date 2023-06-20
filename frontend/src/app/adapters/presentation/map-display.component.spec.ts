import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MapDisplayComponent} from './map-display.component';
import {MapManagementUseCase} from "../../businesslogic/usecases/map-management-use-case";
import {InMemoryMapRemoteService} from "../external/in-memory-map-remote.service";

describe('MapDisplayComponent', () => {
  let component: MapDisplayComponent;
  let fixture: ComponentFixture<MapDisplayComponent>

  beforeEach(() => {
    let mapManagementUseCase = new MapManagementUseCase(new InMemoryMapRemoteService());
    TestBed.configureTestingModule({
      providers: [
        {provide: MapManagementUseCase, useValue: mapManagementUseCase}
      ]
    });
    fixture = TestBed.createComponent(MapDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

