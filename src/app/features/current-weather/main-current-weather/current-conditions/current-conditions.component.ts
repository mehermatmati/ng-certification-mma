import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalStorageElement } from 'src/app/shared/models/local-storage-element.model';
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
  removeLocationEmitter : EventEmitter<LocalStorageElement> = new EventEmitter<LocalStorageElement>();

  constructor(public weatherService : WeatherService) {
  }

  identifyWeatherByZip(id : number, item: any) {
    return item.zip;
  }

  removeLocation(element : LocalStorageElement) {
    this.removeLocationEmitter.emit(element);
  }

}
