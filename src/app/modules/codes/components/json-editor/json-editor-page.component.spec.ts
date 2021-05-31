import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonEditorPageComponent } from './json-editor-page.component';

describe('JsonEditorComponent', () => {
  let component: JsonEditorPageComponent;
  let fixture: ComponentFixture<JsonEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonEditorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
