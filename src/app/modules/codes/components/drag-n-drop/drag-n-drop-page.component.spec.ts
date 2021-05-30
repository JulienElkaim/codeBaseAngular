import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNDropPageComponent } from './drag-n-drop-page.component';

describe('DragNDropComponent', () => {
  let component: DragNDropPageComponent;
  let fixture: ComponentFixture<DragNDropPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragNDropPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragNDropPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
