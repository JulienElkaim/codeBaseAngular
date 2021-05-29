import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuGroupComponent } from './sidebar-menu-group.component';

describe('SidebarMenuGroupComponent', () => {
  let component: SidebarMenuGroupComponent;
  let fixture: ComponentFixture<SidebarMenuGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMenuGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
