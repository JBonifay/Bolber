import {Component, OnInit} from '@angular/core';
import {Message} from "@stomp/stompjs";
import {SimulationMap} from "../businesslogic/models/simulation-map";
import {CarComponent} from "./car.component";
import {Driver} from "../businesslogic/models/driver";
import {SimulationMapApi} from "../businesslogic/ports/simulation-map-api";
import {DriverApi} from "../businesslogic/ports/driver-api";
import {map, Observable, of} from "rxjs";
import {WebSocketService} from "../adapters/web-socket.service";
import {DriverItineraryUpdate} from "../businesslogic/models/driver-itinerary-update";

@Component({
  selector: 'app-map-display',
  templateUrl: './simulation-map-display.component.html',
  styleUrls: ['./simulation-map-display.component.scss']
})
export class SimulationMapDisplayComponent implements OnInit {
  private svgViewSize = 500;
  private gridCount = 50;
  squareSize = this.svgViewSize / this.gridCount;
  blocks: SimulationMap = {blocks: []};

  cars: CarComponent[] = [];

  constructor(private driverApi: WebSocketService, private geoMapApi: SimulationMapApi) {
    driverApi.watch('/topic/drivers').subscribe((message: Message) => {
      let driversJson = JSON.parse(message.body);
      for (let idx = 0; idx < driversJson.length; idx++) {
        let driver = driversJson[idx] as Driver;
        let carComponent = new CarComponent();
        carComponent.x = driver.startingCoordinates.horizontal;
        carComponent.y = driver.startingCoordinates.vertical;
        carComponent.id = driver.driverId;
        this.cars.push(carComponent)
      }
    });

    driverApi.watch('/topic/drivers-itinerary').subscribe((message: Message) => {
      console.log(message.body);
      let driverItineraryUpdate = JSON.parse(message.body) as DriverItineraryUpdate;
      this.cars.find(value => {
        return value.id === driverItineraryUpdate.driverId;
      })?.newItinerary(driverItineraryUpdate.newItinerary.coordinates);
    });
  }


  ngOnInit() {
    let svg = document.getElementById('editorSvg')!;
    svg.setAttribute('width', `${this.svgViewSize}`)
    svg.setAttribute('height', `${this.svgViewSize}`)

    this.geoMapApi.getSimulationMap().subscribe(value => {
      this.blocks = value
    });


  }

}
