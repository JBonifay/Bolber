import {Component, Input} from '@angular/core';
import {Coordinates} from "../businesslogic/models/coordinates";

@Component({
  selector: '[car-svg]',
  template: `
    <svg:rect [attr.x]="x" [attr.y]="y" width="10" height="10"/>`,
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;
  id!: string;
  private actualItinerary: Coordinates[];

  constructor() {
    this.actualItinerary = [];
  }

  newItinerary(newItinerary: Coordinates[]) {
    this.actualItinerary = newItinerary;
    this.move().then(r => console.log("I'm done " + this.id));
  }

  async move() {
    let coordinates: Coordinates[] = this.actualItinerary;

    let idx = 0;
    while (idx != coordinates.length) {
      await this.moveCar(coordinates[idx]);
      idx++;
    }

  }

  async moveCar(coordinates: Coordinates) {
    while (this.x < coordinates.horizontal) {
      this.x = Number((this.x + 0.1).toFixed(1));
      await this.wait(33);
    }

    while (this.x > coordinates.horizontal) {
      this.x = Number((this.x - 0.1).toFixed(1));
      await this.wait(33);
    }

    while (this.y < coordinates.vertical) {
      this.y = Number((this.y + 0.1).toFixed(1));
      await this.wait(33);
    }

    while (this.y > coordinates.vertical) {
      this.y = Number((this.y - 0.1).toFixed(1));
      await this.wait(33);
    }
  }

  private wait = (ms: number) => new Promise(res => setTimeout(res, ms));
}
