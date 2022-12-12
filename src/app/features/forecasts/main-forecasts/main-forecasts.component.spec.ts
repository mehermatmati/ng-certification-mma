import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainForecastsComponent } from './main-forecasts.component';

describe('MainForecastsComponent', () => {
  let component: MainForecastsComponent;
  let fixture: ComponentFixture<MainForecastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainForecastsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainForecastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
