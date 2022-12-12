import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Status } from '../../models/enums/status.enum';

@Component({
  selector: 'app-save-button-states',
  templateUrl: './save-button-states.component.html',
  styleUrls: ['./save-button-states.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaveButtonStatesComponent implements OnInit, OnDestroy  {
  @Input() initialTemplate: any;
  @Input() loadingTemplate: any;
  @Input() doneTemplate: any;
  @Input() getStatus$: Observable<Status> = new Observable();
  @Input() invalidForm: boolean = false;
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();
  disabled: boolean = false;
  buttonClass: string = 'btn btn-primary';
  currentTemplate: any;
  private _subject$ = new Subject<void>();


  constructor() {
  }

  ngOnInit(): void {
    this.currentTemplate = this.initialTemplate;
    this.getButtonStatus();
  }

  click(){
    this.clickEmitter.emit();
  }

  private getButtonStatus(){
    this.getStatus$.subscribe(status => {
      switch(status){
        case Status.Initial : {
          this.currentTemplate = this.initialTemplate;
          this.buttonClass = 'btn btn-primary';
          this.disabled = false;
          break;
        }
        case Status.Loading : {
          this.currentTemplate = this.loadingTemplate;
          this.buttonClass = 'btn btn-primary';
          this.disabled = true;
          break;
        }
        case Status.Done : {
          this.currentTemplate = this.doneTemplate;
          this.buttonClass = 'btn btn-primary done'
          this.disabled = false;
          break;
        }
        default : {
          this.currentTemplate = this.initialTemplate;
          this.buttonClass = 'btn btn-primary'
          this.disabled = false;
          break;
        }
      }
    })
  }

  ngOnDestroy(): void {
    this._subject$.next();
    this._subject$.complete();
  }
}
