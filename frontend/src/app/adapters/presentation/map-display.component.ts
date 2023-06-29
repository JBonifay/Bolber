import {Component, OnInit, Renderer2} from '@angular/core';
import {GeoMapManagementUseCase} from "../../businesslogic/usecases/geo-map-management-use-case";
import {Block} from "../../businesslogic/models/block";
import {CarComponent} from "../../components/car.component";

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
  cars: CarComponent[] = [];

  constructor(private renderer: Renderer2, private geoMapManagement: GeoMapManagementUseCase) {
    let car = new CarComponent();
    car.setPosition(20, 20);
    this.cars.push(car);
  }


  ngOnInit() {
    let svg = document.getElementById('editorSvg')!;
    svg.setAttribute('width', `${this.svgViewSize}`)
    svg.setAttribute('height', `${this.svgViewSize}`)

    this.geoMapManagement.askForMap().subscribe(value => {
      this.blocks = value
    });

    this.cars.forEach(value => {
      value.move()
    })
  }

}
