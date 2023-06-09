import {Observable} from "rxjs";
import {Block} from "../models/block";

export abstract class IMapManagement {

  public abstract getMap(): Observable<Block[]>;

}
