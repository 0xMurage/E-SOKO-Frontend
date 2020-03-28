import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesNavComponent } from './categories-nav.component';

describe('CategoriesNavComponent', () => {
  let component: CategoriesNavComponent;
  let fixture: ComponentFixture<CategoriesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
