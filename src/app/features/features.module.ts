import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastsModule } from './forecasts/forecasts.module';
import { CurrentWeatherModule } from './current-weather/current-weather.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ForecastsModule,
    CurrentWeatherModule
  ]
})
export class FeaturesModule { }
