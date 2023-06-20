import {MapManagementUseCase} from './map-management-use-case';
import {InMemoryMapRemoteService} from "../../adapters/external/in-memory-map-remote.service";

describe('MapManagementUseCase', () => {

  let inMemoryMapService = new InMemoryMapRemoteService()
  let mapManagementUseCase = new MapManagementUseCase(inMemoryMapService);

  beforeEach(() => {
    inMemoryMapService.insert(
      {blockType: "river", xStart: 33, xEnd: 34, yStart: 32, yEnd: 35, color: "#3185FC"},
      {blockType: "building", xStart: 34, xEnd: 35, yStart: 36, yEnd: 36, color: "#d77a61"},
      {blockType: "building", xStart: 36, xEnd: 38, yStart: 36, yEnd: 37, color: "#d77a61"},
      {blockType: "park", xStart: 35, xEnd: 38, yStart: 32, yEnd: 35, color: "#70A288"}
    )
  });

  it('should fetch map data', () => {
    mapManagementUseCase.fetchMap().subscribe(value => {
      expect(value).toEqual({
        gridCount: 10,
        blocks: [
          {blockType: "river", xStart: 33, xEnd: 34, yStart: 32, yEnd: 35, color: "#3185FC"},
          {blockType: "building", xStart: 34, xEnd: 35, yStart: 36, yEnd: 36, color: "#d77a61"},
          {blockType: "building", xStart: 36, xEnd: 38, yStart: 36, yEnd: 37, color: "#d77a61"},
          {blockType: "park", xStart: 35, xEnd: 38, yStart: 32, yEnd: 35, color: "#70A288"}
        ]
      })
    })
  });
});

