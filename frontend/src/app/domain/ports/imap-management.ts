import {Observable} from "rxjs";
import {Block} from "../models/block";
import {CityMap} from "../models/city-map";

export abstract class IMapManagement {

  public abstract getCityMap(): Observable<CityMap>;

}
