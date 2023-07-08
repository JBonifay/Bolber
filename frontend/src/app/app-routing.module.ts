import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SimulationMapDisplayComponent} from "./components/simulation-map-display.component";

const routes: Routes = [
  {path: '**', component: SimulationMapDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
