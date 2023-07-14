import {Injectable} from "@angular/core";
import {RxStomp} from "@stomp/rx-stomp";
import {environment} from "../environments/environment";

export function rxStompServiceFactory() {
  const rxStomp = new WebSocketService();
  rxStomp.configure({
      brokerURL: environment.websocket_url,
      heartbeatIncoming: 0,
      heartbeatOutgoing: 20000,
      reconnectDelay: 200,
      // debug: (msg: string): void => {
      //   console.debug(msg);
      // },
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
