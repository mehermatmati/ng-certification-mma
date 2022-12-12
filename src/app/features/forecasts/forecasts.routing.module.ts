import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainForecastsComponent } from './main-forecasts/main-forecasts.component';

const routes = [  { path: ':zipcode', component: MainForecastsComponent }]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule],
})
export class ForecastsRouterModule { }
