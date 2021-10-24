import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserAffiliateComponent } from './card-user-affiliate.component';

describe('CardUserAffiliateComponent', () => {
  let component: CardUserAffiliateComponent;
  let fixture: ComponentFixture<CardUserAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUserAffiliateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
