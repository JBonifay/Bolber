import {Injectable} from "@angular/core";
import {RxStomp} from "@stomp/rx-stomp";
import {DriverApi} from "../businesslogic/ports/driver-api";
import {Message} from "@stomp/stompjs/esm6";
import {Driver} from "../businesslogic/models/driver";
import {Observable, of} from "rxjs";

export function rxStompServiceFactory() {
  const rxStomp = new WebSocketService();
  rxStomp.configure({
      brokerURL: 'wss://joffreybonifay.fr/socket',
      heartbeatIncoming: 0,
      heartbeatOutgoing: 20000,
      reconnectDelay: 200,
      debug: (msg: string): void => {
        console.log(msg);
      },
    }
  );
  rxStomp.activate();
  return rxStomp;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService extends RxStomp {

  constructor() {
    super();
  }

}
