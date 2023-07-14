import {Coordinates} from "./coordinates";

export interface Driver {
  driverId: string
  status: string
  coordinates: Coordinates
}
