import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {rxStompServiceFactory, WebSocketService} from "./web-socket.service";
import {CarComponent} from "./car.component";

@NgModule({
  declarations: [
    AppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: WebSocketService, useFactory: rxStompServiceFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
