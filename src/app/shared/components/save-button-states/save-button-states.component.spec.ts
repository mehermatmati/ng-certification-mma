import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveButtonStatesComponent } from './save-button-states.component';

describe('SaveButtonStatesComponent', () => {
  let component: SaveButtonStatesComponent;
  let fixture: ComponentFixture<SaveButtonStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveButtonStatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveButtonStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
