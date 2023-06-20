import {MapRemoteService} from "../../businesslogic/ports/map-remote-service";
import {Observable, of} from "rxjs";
import {Block} from "../../businesslogic/models/block";
import {TiledMap} from "../../businesslogic/models/tiled-map";

export class InMemoryMapRemoteService implements MapRemoteService {

  private blocks: Block[] = []

  constructor() {
  }

  insert(...blocks: Block[]) {
    for (const item of blocks) {
      this.blocks.push(item);
    }
  }

  fetchMap(): Observable<TiledMap> {
    return of({gridCount: 10, blocks: this.blocks});
  }
}
