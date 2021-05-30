import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDndCatsComponent } from './demo-dnd-cats.component';

describe('DndCatsComponent', () => {
  let component: DemoDndCatsComponent;
  let fixture: ComponentFixture<DemoDndCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDndCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDndCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
