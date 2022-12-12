import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCurrentWeatherComponent } from './main-current-weather/main-current-weather.component';
import { ZipcodeEntryComponent } from './main-current-weather/zipcode-entry/zipcode-entry.component';
import { CurrentConditionsComponent } from './main-current-weather/current-conditions/current-conditions.component';
import { SharedModule } from '../../shared/shared.module';
import { CurrentConditionElementComponent } from './main-current-weather/current-conditions/current-condition-element/current-condition-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountrySelectionComponent } from './main-current-weather/zipcode-entry/country-selection/country-selection.component';
import { CurrentWeatherRouterModule } from './main-current-weather/current-weather.routing.module';



@NgModule({
  declarations: [
    MainCurrentWeatherComponent,
    ZipcodeEntryComponent,
    CurrentConditionsComponent,
    CurrentConditionElementComponent,
    CountrySelectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CurrentWeatherRouterModule
  ],
  exports: [
    MainCurrentWeatherComponent,
    ZipcodeEntryComponent,
    CurrentConditionsComponent
  ]
})
export class CurrentWeatherModule { }
