import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { Country } from 'src/app/shared/models/contry.model';
import { LocalStorageElement } from 'src/app/shared/models/local-storage-element.model';
import { Status } from '../../../../shared/models/enums/status.enum';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZipcodeEntryComponent implements OnInit, OnDestroy {
  @Output()
  addLocationEmitter: EventEmitter<LocalStorageElement> = new EventEmitter<LocalStorageElement>();
  @Input() getStatus$: Observable<Status> = new Observable();
  @Input() message: string | null = null;
  private _subject$ = new Subject<void>();

  @Input() countries : Country[] = [];

  form : FormGroup = new FormGroup(
    {
      needle : new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      country : new FormControl(null, null),
    }
  )

  constructor() {
  }

  ngOnInit(): void {
    this.getButtonStatusToResetForm();
  }

  addLocation(){
    let country = this.countries.filter(item => item.name == this.form.controls['country'].value)[0];
    this.addLocationEmitter.emit({zip: +this.form.controls['needle'].value, iso: country? country.alpha2Code : "US"});
  }

  private getButtonStatusToResetForm(){
    this.getStatus$.pipe(
      filter(status => status == Status.Initial || status == Status.Done),
      takeUntil(this._subject$)
      )
    .subscribe(() => {
        this.form.reset();
    })
  }

  ngOnDestroy(): void {
    this._subject$.next();
    this._subject$.complete();
  }

}
