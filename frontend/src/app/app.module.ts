import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MapDisplayComponent} from "./adapters/presentation/map-display.component";
import {AppRoutingModule} from "./app-routing.module";
import {IMapManagement} from "./businesslogic/ports/imap-management";
import {RemoteMapService} from "./adapters/external/remote-map.service";

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
    {provide: IMapManagement, useClass: RemoteMapService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
