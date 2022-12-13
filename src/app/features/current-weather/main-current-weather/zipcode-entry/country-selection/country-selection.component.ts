import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country } from 'src/app/shared/models/contry.model';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrySelectionComponent implements OnInit{
  @Input() countries : Country[] = [];
  @Output() emitClicked: EventEmitter<string> = new EventEmitter();
  @Output() emitChanged: EventEmitter<string> = new EventEmitter();
  public readonly country = new FormControl();

  ngOnInit() {
    this.country.valueChanges.subscribe(value => {
      this.emitChanged.emit(value);
    });
  }
  constructor() {}

  clickCountry(country: string) {
    this.country.setValue(country, {emitEvent: false});
    this.countries = [];
    this.emitClicked.emit(country);
  }

}
