import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component'
import {AppRoutingModule} from "./app-routing.module";
import {SimulationMapDisplayComponent} from "./components/simulation-map-display.component";
import {CarComponent} from "./components/car.component";
import {SimulationMapApi} from "./businesslogic/ports/simulation-map-api";
import {SimulationMapApiService} from "./adapters/simulation-map-api.service";
import {rxStompServiceFactory, WebSocketService} from "./adapters/web-socket.service";
import {DriverApi} from "./businesslogic/ports/driver-api";

@NgModule({
  declarations: [
    AppComponent,
    SimulationMapDisplayComponent,
    CarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: SimulationMapApi, useClass: SimulationMapApiService},
    {provide: WebSocketService, useFactory: rxStompServiceFactory,},
    {provide: DriverApi, useClass: WebSocketService},
    // {
    //   deps: [MapRemoteService],
    //   provide: MapManagementUseCase,
    //   useFactory: (remoteService: MapRemoteService) => new MapManagementUseCase(remoteService),
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
