import {Component, OnInit, Renderer2} from '@angular/core';
import {GeoMapManagementUseCase} from "../../businesslogic/usecases/geo-map-management-use-case";
import {Block} from "../../businesslogic/models/block";

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.scss']
})
export class MapDisplayComponent implements OnInit {

  private svgViewSize = 500;
  private gridCount = 50;
  squareSize = this.svgViewSize / this.gridCount;

  blocks: Block[] = [];
  cars = [
    {x: 2, y: 3},
    {x: 10, y: 14},
    {x: 39, y: 14},
    {x: 20, y: 34},
    {x: 42, y: 44},
  ];

  constructor(private renderer: Renderer2, private geoMapManagement: GeoMapManagementUseCase) {
  }

  ngOnInit() {
    let svg = document.getElementById('editorSvg')!;
    svg.setAttribute('width', `${this.svgViewSize}`)
    svg.setAttribute('height', `${this.svgViewSize}`)

    this.geoMapManagement.askForMap().subscribe(value => {
      this.blocks = value.blocks
    });
  }


  // private createSvgBlock(x: number, y: number, color: string, parentSvg: HTMLElement) {
  //   const rect = this.renderer.createElement("rect", 'svg');
  //   this.renderer.setAttribute(rect, "width", `${this.squareSize}`);
  //   this.renderer.setAttribute(rect, "height", `${this.squareSize}`);
  //   this.renderer.setAttribute(rect, "x", `${x * this.squareSize}`);
  //   this.renderer.setAttribute(rect, "y", `${y * this.squareSize}`);
  //   this.renderer.setAttribute(rect, 'fill', color);
  //   this.renderer.appendChild(parentSvg, rect)
  // }

}
