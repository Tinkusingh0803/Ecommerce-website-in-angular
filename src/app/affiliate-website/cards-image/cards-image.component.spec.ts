import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsImageComponent } from './cards-image.component';

describe('CardsImageComponent', () => {
  let component: CardsImageComponent;
  let fixture: ComponentFixture<CardsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
