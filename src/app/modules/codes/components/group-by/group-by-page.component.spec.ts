import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupByPageComponent } from './group-by-page.component';

describe('GroupByPageComponent', () => {
  let component: GroupByPageComponent;
  let fixture: ComponentFixture<GroupByPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupByPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupByPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
