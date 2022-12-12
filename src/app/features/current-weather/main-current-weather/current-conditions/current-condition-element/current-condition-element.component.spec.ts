import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentConditionElementComponent } from './current-condition-element.component';

describe('CurrentConditionElementComponent', () => {
  let component: CurrentConditionElementComponent;
  let fixture: ComponentFixture<CurrentConditionElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentConditionElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentConditionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
