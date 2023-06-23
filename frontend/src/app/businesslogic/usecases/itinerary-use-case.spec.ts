import {ItineraryUseCase} from './itinerary-use-case';
import {InMemoryItineraryApiService} from "../../adapters/external/in-memory-itinerary-api.service";
import {Coordinates} from "../models/coordinates";

describe('PathDisplayerUseCase', () => {

  let itineraryApiService = new InMemoryItineraryApiService();
  let itineraryUseCase = new ItineraryUseCase(itineraryApiService);

  it("should ask backend for shortest path between two points", (done: DoneFn) => {
    itineraryUseCase.askForShortestPathBetween(
      new Coordinates(0, 0),
      new Coordinates(2, 2)
    ).subscribe(shortestPathAnswer => {
        expect(shortestPathAnswer).toEqual(
          [
            new Coordinates(0, 0),
            new Coordinates(0, 1),
            new Coordinates(0, 2),
            new Coordinates(1, 2),
            new Coordinates(2, 2)
          ]);
      }
    );
    done();
  });

});

