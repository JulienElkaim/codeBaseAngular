import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByPageComponent } from './order-by-page.component';

describe('SortPipePageComponent', () => {
  let component: OrderByPageComponent;
  let fixture: ComponentFixture<OrderByPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
