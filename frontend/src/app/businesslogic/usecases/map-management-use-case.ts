import {Observable, of} from "rxjs";
import {MapRemoteService} from "../ports/map-remote-service";
import {Block} from "../models/block";

export class MapManagementUseCase {
  constructor(private mapRemoteService: MapRemoteService) {

  }

  fetchMap() :Observable<Block[]>{
    return this.mapRemoteService.fetchMap();
  }

}
