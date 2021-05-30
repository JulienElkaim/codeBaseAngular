import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndCatsComponent } from './dnd-cats.component';

describe('DndCatsComponent', () => {
  let component: DndCatsComponent;
  let fixture: ComponentFixture<DndCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DndCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
