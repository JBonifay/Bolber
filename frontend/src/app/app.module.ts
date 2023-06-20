import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MapDisplayComponent} from "./adapters/presentation/map-display.component";
import {AppRoutingModule} from "./app-routing.module";
import {MapRemoteService} from "./businesslogic/ports/map-remote-service";
import {MapManagementUseCase} from "./businesslogic/usecases/map-management-use-case";
import {InMemoryWithDataService} from "./adapters/external/in-memory-with-data.service";

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
    {
      deps: [HttpClient],
      provide: MapRemoteService,
      useFactory: (http: HttpClient) => new InMemoryWithDataService()
    },
    {
      deps: [MapRemoteService],
      provide: MapManagementUseCase,
      useFactory: (remoteService: MapRemoteService) => new MapManagementUseCase(remoteService),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
