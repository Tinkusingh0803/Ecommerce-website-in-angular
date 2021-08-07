import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateWebsiteComponent } from './affiliate-website.component';

describe('AffiliateWebsiteComponent', () => {
  let component: AffiliateWebsiteComponent;
  let fixture: ComponentFixture<AffiliateWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
