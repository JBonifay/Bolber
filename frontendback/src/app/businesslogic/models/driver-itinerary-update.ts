import {Coordinates} from "./coordinates";

export interface DriverItineraryUpdate {
  driverId: string
  newItinerary: {
    coordinates: Coordinates[]
  }
}

