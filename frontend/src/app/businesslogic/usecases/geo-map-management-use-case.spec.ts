import {GeoMapManagementUseCase} from './geo-map-management-use-case';
import {InMemoryGeoMapApiService} from "../../adapters/external/in-memory-geo-map-api.service";

describe('GeoMapManagement', () => {

  let inMemoryGeoMap = new InMemoryGeoMapApiService();
  let geoMapManagement = new GeoMapManagementUseCase(inMemoryGeoMap);

  beforeEach(() => {
    inMemoryGeoMap.insert({
      blocks: []
    });
  });

  it('should ask map data to api service', (done: DoneFn) => {
    geoMapManagement.askForMap().subscribe(apiResult => {
      expect(apiResult).toEqual(
        {
          blocks:
            []
        });
      done();
    });
  });

});
