import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Block} from "./block";
import {WebSocketService} from "./web-socket.service";
import {Message} from "@stomp/stompjs";
import {Driver} from "./driver";

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
  drivers: Driver[] = []

  constructor(private httpClient: HttpClient, private socket: WebSocketService) {
    socket.watch('/topic/drivers').subscribe((message: Message) => {
      let driverMessage = JSON.parse(message.body) as Driver;
      this.drivers.find(value => value.driverId === driverMessage.driverId)?.update(driverMessage);
    });
  }

  ngOnInit() {
    let svg = document.getElementById('editorSvg')!;
    svg.setAttribute('width', `${this.svgViewSize}`)
    svg.setAttribute('height', `${this.svgViewSize}`)

    this.httpClient.get<any>("/backend/api/map").subscribe(
      (value) => {
        this.blocks = value
      },
      error => console.log(error));

  }
}
