import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAffiliateUserComponent } from './page-affiliate-user.component';

describe('PageAffiliateUserComponent', () => {
  let component: PageAffiliateUserComponent;
  let fixture: ComponentFixture<PageAffiliateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAffiliateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAffiliateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
