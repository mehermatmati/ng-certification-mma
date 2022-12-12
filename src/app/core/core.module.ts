import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { SharedModule } from '../shared/shared.module';
import { LocalStorageService } from './services/local-storage.service';
import { CountryService } from './services/contries.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    LocalStorageService,
    WeatherService,
    CountryService
  ]
})
export class CoreModule { }
