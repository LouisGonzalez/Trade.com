import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAffiliatesComponent } from './card-affiliates.component';

describe('CardAffiliatesComponent', () => {
  let component: CardAffiliatesComponent;
  let fixture: ComponentFixture<CardAffiliatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAffiliatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAffiliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
