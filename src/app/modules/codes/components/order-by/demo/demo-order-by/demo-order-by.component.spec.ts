import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOrderByComponent } from './demo-order-by.component';

describe('DemoOrderByComponent', () => {
  let component: DemoOrderByComponent;
  let fixture: ComponentFixture<DemoOrderByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoOrderByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoOrderByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
