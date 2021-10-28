import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjAcceptComponent } from './msj-accept.component';

describe('MsjAcceptComponent', () => {
  let component: MsjAcceptComponent;
  let fixture: ComponentFixture<MsjAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsjAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
