import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFoundComponent } from './article-found.component';

describe('ArticleFoundComponent', () => {
  let component: ArticleFoundComponent;
  let fixture: ComponentFixture<ArticleFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
