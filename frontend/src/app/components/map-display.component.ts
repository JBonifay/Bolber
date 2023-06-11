import {Component, OnInit, Renderer2} from '@angular/core';
import {IMapManagement} from "../domain/ports/imap-management";
import {Block} from "../domain/models/block";

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.scss']
})
export class MapDisplayComponent implements OnInit {

  private viewGridSize = 700;
  private points: Map<string, SVGRect> = new Map();

  constructor(private renderer: Renderer2, private mapService: IMapManagement) {
  }

  ngOnInit() {
    let svg = document.getElementById('editorSvg')!;
    svg.setAttribute('width', `${this.viewGridSize}`)
    svg.setAttribute('height', `${this.viewGridSize}`)

    this.mapService.getCityMap().subscribe(cityMap => {
      let gridCount = cityMap.blocksPerSide;
      let squareSize = this.viewGridSize / gridCount;
      this.drawRoad(svg, gridCount, squareSize);
      this.drawObstacles(svg, cityMap.blocks, squareSize);
    });
  }

  drawRoad(svg: HTMLElement, gridCount: number, squareSize: number) {
    for (let i = 0; i < gridCount; i++) {
      for (let j = 0; j < gridCount; j++) {
        this.createSvgBlock(j, i, '#eeeeee', svg, squareSize);
      }
    }
  }

  private drawObstacles(svg: HTMLElement, blockValues: Block[], squareSize: number) {
    blockValues.forEach(block => {
      let x = block.xStart;
      let xEnd = block.xEnd;
      let yStart = block.yStart;
      let yEnd = block.yEnd;

      while (x <= xEnd) {
        let y = yStart
        while (y <= yEnd) {
          this.createSvgBlock(x, y, block.color, svg, squareSize)
          this.points.delete(`${x}:${y}`);
          y++;
        }
        x++;
      }
    })
  }

  private createSvgBlock(x: number, y: number, color: string, parentSvg: HTMLElement, squareSize: number) {
    const rect = this.renderer.createElement("rect", 'svg');
    this.renderer.setAttribute(rect, "width", `${squareSize}`);
    this.renderer.setAttribute(rect, "height", `${squareSize}`);
    this.renderer.setAttribute(rect, "x", `${x * squareSize}`);
    this.renderer.setAttribute(rect, "y", `${y * squareSize}`);
    this.renderer.setAttribute(rect, 'fill', color);
    this.renderer.appendChild(parentSvg, rect)
    this.points.set(`${x}:${y}`, rect);
  }
}
