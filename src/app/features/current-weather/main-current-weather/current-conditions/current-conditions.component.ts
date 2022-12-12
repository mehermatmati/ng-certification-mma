import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherService } from '../../../../core/services/weather.service';
import { Location } from '../../../../shared/models/location.model';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentConditionsComponent {

  @Input()
  locations: Location[] = [];

  @Output()
  removeLocationEmitter : EventEmitter<number> = new EventEmitter<number>();

  constructor(public weatherService : WeatherService) {
  }

  identifyWeatherByZip(id : number, item: any) {
    return item.zip;
  }

  removeLocation(zipCode : number) {
    this.removeLocationEmitter.emit(zipCode);
  }

}
