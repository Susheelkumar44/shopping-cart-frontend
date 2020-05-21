import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersconfirmationComponent } from './ordersconfirmation.component';

describe('OrdersconfirmationComponent', () => {
  let component: OrdersconfirmationComponent;
  let fixture: ComponentFixture<OrdersconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
