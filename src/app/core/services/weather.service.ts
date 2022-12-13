import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import { DailyForecast } from '../../shared/models/daily-forecast.model';
import { Location } from '../../shared/models/location.model';
import { LocationData } from '../../shared/models/location-data.model';
import { Status } from '../../shared/models/enums/status.enum';
import { LocalStorageElement } from 'src/app/shared/models/local-storage-element.model';

@Injectable()
export class WeatherService {

  _buttonState: BehaviorSubject<Status> = new BehaviorSubject<Status>(Status.Initial);

  get buttonState(): Observable<Status>{
    return this._buttonState.asObservable();
  }


  static URL = 'https://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  constructor(private http: HttpClient) { }

  getWeather(info : LocalStorageElement): Observable<Location> {
    if(info.iso && info.iso.length>0) {
      return this.http.get<LocationData>(`${WeatherService.URL}/weather?zip=${info.zip},${info.iso}&units=imperial&APPID=${WeatherService.APPID}`).pipe(
        map(data => {return {zip: info.zip, iso: info.iso, data: data}})
      );
    }
    else {
      return this.http.get<LocationData>(`${WeatherService.URL}/weather?zip=${info.zip},us&units=imperial&APPID=${WeatherService.APPID}`).pipe(
        map(data => {return {zip: info.zip, iso: info.iso, data: data}})
      );
    }

  }

  getForecast(info : LocalStorageElement): Observable<DailyForecast> {
    if(info.iso && info.iso.length>0) {
      return this.http.get<DailyForecast>(`${WeatherService.URL}/forecast/daily?zip=${info.zip},${info.iso}&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);
    }
    else {
      return this.http.get<DailyForecast>(`${WeatherService.URL}/forecast/daily?zip=${info.zip}&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);
    }
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode

  }

}
