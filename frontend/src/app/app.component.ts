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

  // cars: CarComponent[] = [];

  constructor(private httpClient: HttpClient, private socket: WebSocketService) {
    socket.watch('/topic/drivers').subscribe((message: Message) => {
      let driver = JSON.parse(message.body) as Driver;
      console.log(driver);
      this.drivers.push(driver)
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
