import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from './core/services/contries.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { WeatherService } from './core/services/weather.service';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule
  ],
  providers: [LocalStorageService, WeatherService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
