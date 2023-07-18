import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Block} from "./block";
import {WebSocketService} from "./web-socket.service";
import {Message} from "@stomp/stompjs";
import {Driver} from "./driver";
import {Customer} from "./customer";
import {CustomerEvent} from "./customer-event";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private svgViewSize = 500;
  private gridCount = 50;
  squareSize = this.svgViewSize / this.gridCount;
  blocks: Block[] = [];
  drivers: Array<Driver> = []
  customer: Customer[] = []

  constructor(private httpClient: HttpClient, private socket: WebSocketService) {
  }

  ngOnInit() {
    let svg = document.getElementById('editorSvg')!;
    svg.setAttribute('width', `${this.svgViewSize}`)
    svg.setAttribute('height', `${this.svgViewSize}`)

    this.httpClient.get<any>("/api/map_data").subscribe(
      (value) => {
        this.blocks = value
      }
    );

    this.httpClient.get<Driver[]>("/api/drivers").subscribe(driverResponse => {
      this.drivers = driverResponse;
    })

    this.socket.watch('/topic/customers').subscribe((message: Message) => {
      let customerMessage = JSON.parse(message.body) as Customer;
      this.customer.push(customerMessage);
      console.log("Adding customer " + customerMessage.customerId)
    });

    this.socket.watch('/topic/customer-event').subscribe((message: Message) => {
      let customerEventMessage = JSON.parse(message.body) as CustomerEvent;
      let idx = this.customer.findIndex(value => {
        console.log(value.customerId + "==" + customerEventMessage.uuid)
        return value.customerId == customerEventMessage.uuid
      })
      delete this.customer[idx];
      console.log("deleting " + idx)
    });

    this.socket.watch('/topic/drivers').subscribe((message: Message) => {
      let driverMessage = JSON.parse(message.body) as Driver;
      this.drivers.filter(value => value.driverId === driverMessage.driverId).map(value => {
        value.coordinates.horizontal = driverMessage.coordinates.horizontal;
        value.coordinates.vertical = driverMessage.coordinates.vertical;
      })
    });
  }
}
