import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDndDogsComponent } from './demo-dnd-dogs.component';

describe('DndCatsComponent', () => {
  let component: DemoDndDogsComponent;
  let fixture: ComponentFixture<DemoDndDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDndDogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDndDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
