import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MapDisplayComponent} from './map-display.component';
import {IMapManagement} from "../domain/ports/imap-management";
import {InMemoryMapService} from "../adapters/in-memory-map.service";
import {Block} from "../domain/models/block";

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

  it('should add block', () => {
    let svg = document.getElementById('editorSvg')!;
    let blocks = Array.of(
      new Block("river", 0, 1, 0, 1, "#3185FC"),
      new Block("river", 3, 4, 3, 4, "#3185FC"),
    );
    mapService.insert(blocks);
    component.ngOnInit()

    expect(svg.children.length).toEqual(8);
  });
});

