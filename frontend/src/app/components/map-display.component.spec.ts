import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MapDisplayComponent} from './map-display.component';
import {IMapManagement} from "../domain/ports/imap-management";
import {InMemoryMapService} from "../adapters/in-memory-map.service";

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
    let blocks = [
      {blockType: "river", xStart: 0, xEnd: 1, yStart: 0, yEnd: 1, color: "#3185FC"},
      {blockType: "river", xStart: 3, xEnd: 4, yStart: 3, yEnd: 4, color: "#3185FC"}
    ];
    mapService.insert(blocks);
    component.ngOnInit()

    expect(svg.children.length).toEqual(8);
  });
});

