import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserFollowedComponent } from './card-user-followed.component';

describe('CardUserFollowedComponent', () => {
  let component: CardUserFollowedComponent;
  let fixture: ComponentFixture<CardUserFollowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUserFollowedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserFollowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
