import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileeditComponent } from './userprofileedit.component';

describe('UserprofileeditComponent', () => {
  let component: UserprofileeditComponent;
  let fixture: ComponentFixture<UserprofileeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofileeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
