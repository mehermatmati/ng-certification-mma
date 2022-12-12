import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainCurrentWeatherComponent } from './main-current-weather.component';

const routes = [  { path: '', component: MainCurrentWeatherComponent }]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule],
})
export class CurrentWeatherRouterModule { }
