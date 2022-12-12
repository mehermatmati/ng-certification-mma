import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCurrentWeatherComponent } from './main-current-weather.component';

describe('MainCurrentWeatherComponent', () => {
  let component: MainCurrentWeatherComponent;
  let fixture: ComponentFixture<MainCurrentWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCurrentWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
