import {Component, Input} from '@angular/core';

@Component({
  selector: '[car-svg]',
  template: `
    <svg:rect [attr.x]="x" [attr.y]="y" width="10" height="10"/>`,
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;

}
