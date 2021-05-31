import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor-page.component.html',
  styleUrls: ['./json-editor-page.component.scss']
})
export class JsonEditorPageComponent implements OnInit {
  public demoFiles: string[] = [
    "src/app/modules/codes/components/json-editor/demo/demo-json-editor/demo-json-editor.component.html",
    "src/app/modules/codes/components/json-editor/demo/demo-json-editor/demo-json-editor.component.ts",
    "src/app/modules/codes/components/json-editor/demo/demo-json-editor/demo-json-editor.component.scss",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
