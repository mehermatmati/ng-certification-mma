import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainForecastsComponent } from './main-forecasts/main-forecasts.component';
import { ForecastsListComponent } from './main-forecasts/forecasts-list/forecasts-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ForecastElementComponent } from './main-forecasts/forecasts-list/forecast-element/forecast-element.component';
import { ForecastsRouterModule } from './forecasts.routing.module';



@NgModule({
  declarations: [
    MainForecastsComponent,
    ForecastsListComponent,
    ForecastElementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ForecastsRouterModule
  ],
  exports: [
    MainForecastsComponent,
    ForecastsListComponent
  ]
})
export class ForecastsModule { }
