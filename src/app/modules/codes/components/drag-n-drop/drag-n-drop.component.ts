import { Component, OnInit } from '@angular/core';
import {CodeElement} from '../../../../model/code-element';
import {CodeElementService} from "../../../../services/code-element.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss']
})
export class DragNDropComponent implements OnInit {

  public codeElements: CodeElement[] = [];

  constructor(private codeElementService: CodeElementService) { }

  ngOnInit(): void {
    this.getCodeElements();
  }

  public log($event: any) {
    console.log($event);
  }

  public getCodeElements(){
    this.codeElementService.build([
      "src/app/modules/codes/components/drag-n-drop/src/model/draggable-type.ts",
      "src/app/modules/codes/components/drag-n-drop/src/model/type-validation-error.ts"
    ]).subscribe(res=>{
      console.log("EH oui", res);
      this.codeElements = res;
    })
  }
}
