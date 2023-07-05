import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MapDisplayComponent} from "./adapters/presentation/map-display.component";
import {AppRoutingModule} from "./app-routing.module";
import {MapApi} from "./businesslogic/ports/map-api";
import {CarComponent} from './components/car.component';
import {rxStompServiceFactory, WebSocketService} from "./adapters/external/web-socket.service";
import {GeoMapApiService} from "./adapters/external/geo-map-api.service";

@NgModule({
  declarations: [
    AppComponent,
    MapDisplayComponent,
    CarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: MapApi, useClass: GeoMapApiService},
    {
      provide: WebSocketService,
      useFactory: rxStompServiceFactory,
    },
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
