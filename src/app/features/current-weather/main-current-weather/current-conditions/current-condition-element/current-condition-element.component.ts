import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../../../../core/services/weather.service';
import { WeatherUtils } from '../../../../../shared/utils/weather.utils';

@Component({
  selector: 'app-current-condition-element',
  templateUrl: './current-condition-element.component.html',
  styleUrls: ['./current-condition-element.component.css']
})
export class CurrentConditionElementComponent {
  @Input()
  location : any;
  @Output()
  removeLocationEmitter : EventEmitter<number> = new EventEmitter<number>();

  constructor(public weatherService: WeatherService, private router : Router) {}

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }

  getWeatherIcon(id: number): string{
    return WeatherUtils.getWeatherIcon(id);
  }

  removeLocation(zipCode : number) {
    this.removeLocationEmitter.emit(zipCode);
  }
}
