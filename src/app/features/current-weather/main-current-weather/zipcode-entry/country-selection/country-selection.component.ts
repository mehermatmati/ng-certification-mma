import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Country } from 'src/app/shared/models/contry.model';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.css'],
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CountrySelectionComponent ),
    multi: true
  }
],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrySelectionComponent implements ControlValueAccessor{
  @Input() countries : Country[] = [];

  set value(val: string) {
    this.onChange(val);
  }
  _value: string='';

  onChange = (value: string) => {
    this.writeValue(value)
  };

  onTouched = () => {};

  constructor() {}

  clickCountry(country: string) {
    this.writeValue(country);
    this.countries = [];
  }

  writeValue(value: string): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
