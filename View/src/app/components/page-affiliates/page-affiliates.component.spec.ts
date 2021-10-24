import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAffiliatesComponent } from './page-affiliates.component';

describe('PageAffiliatesComponent', () => {
  let component: PageAffiliatesComponent;
  let fixture: ComponentFixture<PageAffiliatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAffiliatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAffiliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
