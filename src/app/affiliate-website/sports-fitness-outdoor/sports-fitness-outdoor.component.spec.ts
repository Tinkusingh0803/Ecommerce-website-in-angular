import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsFitnessOutdoorComponent } from './sports-fitness-outdoor.component';

describe('SportsFitnessOutdoorComponent', () => {
  let component: SportsFitnessOutdoorComponent;
  let fixture: ComponentFixture<SportsFitnessOutdoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsFitnessOutdoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsFitnessOutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
