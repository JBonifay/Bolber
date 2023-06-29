import {Injectable} from '@angular/core';
import {MapApi} from "../../businesslogic/ports/map-api";
import {Observable, of} from "rxjs";
import {Block} from "../../businesslogic/models/block";

@Injectable({
  providedIn: 'root'
})
export class InMemoryWithDataGeoMapApiService implements MapApi {


  private data: Block[] = [
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 0
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 1
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 1
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 2
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 2
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 3
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 3
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 3
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 3
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 3
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 3
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 3
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 3
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 3
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 4
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 19,
      "y": 4
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 20,
      "y": 4
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 21,
      "y": 4
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 22,
      "y": 4
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 23,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 4
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 4
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 5
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 19,
      "y": 5
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 20,
      "y": 5
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 21,
      "y": 5
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 22,
      "y": 5
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 23,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 5
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 5
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 6
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 19,
      "y": 6
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 20,
      "y": 6
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 21,
      "y": 6
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 22,
      "y": 6
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 23,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 6
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 6
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 7
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 19,
      "y": 7
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 20,
      "y": 7
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 21,
      "y": 7
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 22,
      "y": 7
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 23,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 7
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 7
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 8
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 19,
      "y": 8
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 20,
      "y": 8
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 21,
      "y": 8
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 22,
      "y": 8
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 23,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 33,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 8
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 8
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 9
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 19,
      "y": 9
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 20,
      "y": 9
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 21,
      "y": 9
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 22,
      "y": 9
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 23,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 33,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 9
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 9
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 10
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 19,
      "y": 10
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 20,
      "y": 10
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 21,
      "y": 10
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 22,
      "y": 10
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 23,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 33,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 10
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 10
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 11
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 11
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 11
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 11
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 11
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 11
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 33,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 12
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 12
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 33,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 13
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 13
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 33,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 14
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 14
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 33,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 15
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 15
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 16
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 16
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 17
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 17
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 18
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 18
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 19
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 19
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 20
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 20
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 20
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 0,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 1,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 2,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 3,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 4,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 5,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 6,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 7,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 9,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 10,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 11,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 12,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 13,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 14,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 15,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 16,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 17,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 18,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 19,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 20,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 21,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 22,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 23,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 24,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 25,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 27,
      "y": 21
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 28,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 21
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 21
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 22
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 28,
      "y": 22
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 29,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 22
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 22
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 23
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 29,
      "y": 23
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 30,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 23
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 23
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 24
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 24
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 30,
      "y": 24
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 24
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 24
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 24
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 24
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 24
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 24
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 24
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 24
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 24
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 24
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 25
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 25
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 25
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 25
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 25
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 26
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 26
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 26
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 26
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 26
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 26
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 26
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 4,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 25,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 27
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 27
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 27
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 27
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 27
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 28
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 28
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 28
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 46,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 28
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 28
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 29
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 29
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 29
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 29
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 29
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 20,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 30
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 30
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 30
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 30
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 30
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 31
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 31
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 32
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 32
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 32
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 32
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 35,
      "y": 32
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 36,
      "y": 32
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 37,
      "y": 32
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 38,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 32
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 32
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 33
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 33
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 33
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 33
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 35,
      "y": 33
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 36,
      "y": 33
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 37,
      "y": 33
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 38,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 33
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 33
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 34
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 34
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 34
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 34
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 34
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 34
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 34
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 35,
      "y": 34
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 36,
      "y": 34
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 37,
      "y": 34
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 38,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 34
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 34
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 34
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 34
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 34
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 34
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 34
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 34
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 35
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 35
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 33,
      "y": 35
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 35
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 35,
      "y": 35
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 36,
      "y": 35
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 37,
      "y": 35
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 38,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 35
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 35
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 36
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 36
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 34,
      "y": 36
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 35,
      "y": 36
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 36,
      "y": 36
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 37,
      "y": 36
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 38,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 36
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 36
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 6,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 9,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 37
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 31,
      "y": 37
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 32,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 37
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 36,
      "y": 37
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 37,
      "y": 37
    },
    {
      "blockType": "PARK",
      "color": "#70A288",
      "x": 38,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 37
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 37
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 38
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 38
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 38
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 38
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 38
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 38
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 38
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 38
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 38
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 38
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 32,
      "y": 38
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 33,
      "y": 38
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 34,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 38
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 13,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 39
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 34,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 35,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 36,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 37,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 38,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 39,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 40,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 41,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 42,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 43,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 45,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 46,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 47,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 48,
      "y": 39
    },
    {
      "blockType": "RIVER",
      "color": "#3185FC",
      "x": 49,
      "y": 39
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 40
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 40
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 40
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 40
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 40
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 40
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 40
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 40
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 35,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 37,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 42,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 41
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 41
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 42
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 42
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 43
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 43
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 44
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 44
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 32,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 45
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 45
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 46
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 46
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 33,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 44,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 47
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 47
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 1,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 2,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 3,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 5,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 7,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 8,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 10,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 11,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 12,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 14,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 15,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 16,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 17,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 18,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 19,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 21,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 22,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 23,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 24,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 26,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 27,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 28,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 29,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 30,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 31,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 33,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 34,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 36,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 38,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 40,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 41,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 43,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 45,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 47,
      "y": 48
    },
    {
      "blockType": "BUILDING",
      "color": "#d77a61",
      "x": 48,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 48
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 0,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 1,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 2,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 3,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 4,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 5,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 6,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 7,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 8,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 9,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 10,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 11,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 12,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 13,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 14,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 15,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 16,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 17,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 18,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 19,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 20,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 21,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 22,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 23,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 24,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 25,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 26,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 27,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 28,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 29,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 30,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 31,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 32,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 33,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 34,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 35,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 36,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 37,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 38,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 39,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 40,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 41,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 42,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 43,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 44,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 45,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 46,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 47,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 48,
      "y": 49
    },
    {
      "blockType": "ROAD",
      "color": "#f5f5f5",
      "x": 49,
      "y": 49
    }
  ];
  constructor() {

  }

  askForMap(): Observable<Block[]> {
    return of(this.data);
  }

}
