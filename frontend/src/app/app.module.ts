import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MapDisplayComponent} from "./adapters/presentation/map-display.component";
import {AppRoutingModule} from "./app-routing.module";
import {GeoMapApi} from "./businesslogic/ports/geo-map-api";
import {GeoMapApiService} from "./adapters/external/geo-map-api.service";

@NgModule({
  declarations: [
    AppComponent,
    MapDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: GeoMapApi, useClass: GeoMapApiService}
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
