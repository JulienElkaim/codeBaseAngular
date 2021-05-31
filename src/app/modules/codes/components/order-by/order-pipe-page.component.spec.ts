import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPipePageComponent } from './order-pipe-page.component';

describe('SortPipePageComponent', () => {
  let component: OrderPipePageComponent;
  let fixture: ComponentFixture<OrderPipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPipePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
