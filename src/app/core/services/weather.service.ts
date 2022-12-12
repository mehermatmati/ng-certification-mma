import { Injectable } from '@angular/core';
import {BehaviorSubject, interval, map, Observable, Subject, switchMap, takeUntil, tap, timer} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import { DailyForecast } from '../../shared/models/daily-forecast.model';
import { Location } from '../../shared/models/location.model';
import { LocationData } from '../../shared/models/location-data.model';
import { Status } from '../../shared/models/enums/status.enum';

@Injectable()
export class WeatherService {

  _buttonState: BehaviorSubject<Status> = new BehaviorSubject<Status>(Status.Initial);

  get buttonState(): Observable<Status>{
    return this._buttonState.asObservable();
  }


  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  constructor(private http: HttpClient) { }

  getWeather(zipcode: number): Observable<Location> {
    return this.http.get<LocationData>(`${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`).pipe(
      map(data => {return {zip: zipcode, data: data}})
    );
  }

  getForecast(zipcode: number): Observable<DailyForecast> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get<DailyForecast>(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);

  }

}
