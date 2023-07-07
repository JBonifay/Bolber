import {Injectable} from "@angular/core";
import {RxStomp} from "@stomp/rx-stomp";

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
