import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGroupByComponent } from './demo-group-by.component';

describe('DemoGroupByComponent', () => {
  let component: DemoGroupByComponent;
  let fixture: ComponentFixture<DemoGroupByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoGroupByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGroupByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
