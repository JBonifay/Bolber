import {Component, OnInit, Renderer2} from '@angular/core';
import {IMapManagement} from "../domain/ports/imap-management";
import {Block} from "../domain/models/block";

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.scss']
})
export class MapDisplayComponent implements OnInit {

  private gridSize = 500;
  private gridCount = 50;
  private squareSize = this.gridSize / this.gridCount;
  private points: Map<string, SVGRect> = new Map();

  constructor(private renderer: Renderer2, private mapService: IMapManagement) {
  }

  ngOnInit() {
    let svg = document.getElementById('editorSvg')!;
    svg.setAttribute('width', `${this.gridSize}`)
    svg.setAttribute('height', `${this.gridSize}`)

    this.mapService.getMap().subscribe(blocks => {
      console.log(blocks);
      this.drawObstacles(svg, blocks);
    });
  }

  drawRoad(svg: HTMLElement) {
    for (let i = 0; i < this.gridCount; i++) {
      for (let j = 0; j < this.gridCount; j++) {
        this.createSvgBlock(j, i, 'white', svg);
      }
    }
  }

  private drawObstacles(svg: HTMLElement, blockValues: Block[]) {
    blockValues.forEach(block => {
      let x = block.xStart;
      let xEnd = block.xEnd;
      let yStart = block.yStart;
      let yEnd = block.yEnd;

      while (x <= xEnd) {
        let y = yStart
        while (y <= yEnd) {
          this.createSvgBlock(x, y, block.color, svg)
          this.points.delete(`${x}:${y}`);
          y++;
        }
        x++;
      }
    })
  }

  private createSvgBlock(x: number, y: number, color: string, parentSvg: HTMLElement) {
    const rect = this.renderer.createElement("rect", 'svg');
    this.renderer.setAttribute(rect, "width", `${this.squareSize}`);
    this.renderer.setAttribute(rect, "height", `${this.squareSize}`);
    this.renderer.setAttribute(rect, "x", `${x * this.squareSize}`);
    this.renderer.setAttribute(rect, "y", `${y * this.squareSize}`);
    this.renderer.setAttribute(rect, 'fill', color);
    this.renderer.appendChild(parentSvg, rect)
    this.points.set(`${x}:${y}`, rect);
  }
}
