import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptycartpageComponent } from './emptycartpage.component';

describe('EmptycartpageComponent', () => {
  let component: EmptycartpageComponent;
  let fixture: ComponentFixture<EmptycartpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptycartpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptycartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
