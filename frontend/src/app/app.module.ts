import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RemoteMapService} from "./adapters/remote-map.service";
import {IMapManagement} from "./domain/ports/imap-management";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {provide: IMapManagement, useClass: RemoteMapService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
