import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastElementComponent } from './forecast-element.component';

describe('ForecastElementComponent', () => {
  let component: ForecastElementComponent;
  let fixture: ComponentFixture<ForecastElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
