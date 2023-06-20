import {Observable} from "rxjs";
import {Block} from "../models/block";

export interface MapRemoteService {
  fetchMap(): Observable<Block[]>;
}
