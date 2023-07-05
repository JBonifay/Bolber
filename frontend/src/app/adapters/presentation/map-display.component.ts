import {Component, OnInit} from '@angular/core';
import {GeoMapManagementUseCase} from "../../businesslogic/usecases/geo-map-management-use-case";
import {CarComponent} from "../../components/car.component";
import {WebSocketService} from "../external/web-socket.service";
import {SimulationMap} from "../../businesslogic/models/simulation-map";

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.scss']
})
export class MapDisplayComponent implements OnInit {

  stock: any = {};

  private svgViewSize = 500;
  private gridCount = 50;
  squareSize = this.svgViewSize / this.gridCount;
  blocks: SimulationMap = {blocks: []};
  cars: CarComponent[] = [];

  constructor(private stomp: WebSocketService, private geoMapManagement: GeoMapManagementUseCase) {
    let car = new CarComponent();
    car.setPosition(20, 20);
    this.cars.push(car);

    this.stomp.watch('/topic/drivers').subscribe(value => console.log(value.body));
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
