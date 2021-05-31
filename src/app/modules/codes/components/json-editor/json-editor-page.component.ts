import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor-page.component.html',
  styleUrls: ['./json-editor-page.component.scss']
})
export class JsonEditorPageComponent implements OnInit {
  public htmlDemoFile: string[] = [
    "src/app/modules/codes/components/json-editor/demo/demo-json-editor/demo-json-editor.component.html"
  ];

  public demoFiles: string[] = [
    ...this.htmlDemoFile,
    "src/app/modules/codes/components/json-editor/demo/demo-json-editor/demo-json-editor.component.ts",
    "src/app/modules/codes/components/json-editor/demo/demo-json-editor/demo-json-editor.component.scss"
  ];
  directiveSources: string[] = [
    "src/app/modules/codes/components/json-editor/src/json-editor.directive.ts",
    "src/app/modules/codes/components/json-editor/src/json-editor.directive.scss",
    "src/app/modules/codes/components/json-editor/src/json-util.service.ts"
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
