import {Observable} from "rxjs";
import {CityMap} from "../models/city-map";

export abstract class IMapManagement {

  public abstract getCityMap(): Observable<CityMap>;

}
