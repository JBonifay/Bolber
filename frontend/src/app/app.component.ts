import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Block} from "./block";

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

  // cars: CarComponent[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    let svg = document.getElementById('editorSvg')!;
    svg.setAttribute('width', `${this.svgViewSize}`)
    svg.setAttribute('height', `${this.svgViewSize}`)

    this.httpClient.get<any>("/backend/api/map").subscribe(
      (value) => {
        console.log(value);
        this.blocks = value
      },
      error => console.log(error));

  }
}
