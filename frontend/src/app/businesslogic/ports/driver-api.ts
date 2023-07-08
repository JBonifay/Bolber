import {Observable} from "rxjs";
import {Driver} from "../models/driver";

export abstract class DriverApi {
  abstract drivers(): Observable<Driver[]>;
}
