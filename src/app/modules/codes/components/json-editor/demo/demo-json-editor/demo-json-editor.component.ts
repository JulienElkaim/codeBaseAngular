import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-demo-json-editor',
  templateUrl: './demo-json-editor.component.html',
  styleUrls: ['./demo-json-editor.component.scss']
})
export class DemoJsonEditorComponent implements OnInit {
  isAutoValidationActivated: boolean = false;
  demoValue: string = '{"Example" : "Modify me and check if your JSON format is correct !"}';
  manualTrigger: Subject<void> = new Subject<void>();
  public errorMessage?: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    //TODO: connect to a notification service;
  }


}
