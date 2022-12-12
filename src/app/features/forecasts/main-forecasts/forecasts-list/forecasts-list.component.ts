import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DailyForecast } from '../../../../shared/models/daily-forecast.model';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastsListComponent {

  @Input() forecast: DailyForecast | null = null;

  constructor() {}

}
