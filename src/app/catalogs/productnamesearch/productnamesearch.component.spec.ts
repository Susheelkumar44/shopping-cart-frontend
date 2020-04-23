import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnamesearchComponent } from './productnamesearch.component';

describe('ProductnamesearchComponent', () => {
  let component: ProductnamesearchComponent;
  let fixture: ComponentFixture<ProductnamesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductnamesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductnamesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
