import { Component, OnInit } from '@angular/core';
import {CodeElement} from '../../../../model/code-element';
import {CodeElementService} from "../../../../services/code-element.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop-page.component.html',
  styleUrls: ['./drag-n-drop-page.component.scss']
})
export class DragNDropPageComponent implements OnInit {

  interfaceDraggableType: string[] = [
    "src/app/modules/codes/components/drag-n-drop/src/model/draggable-type.ts",
    "src/app/modules/codes/components/drag-n-drop/demo/model/cat.ts",
    "src/app/modules/codes/components/drag-n-drop/demo/model/dog.ts"
  ] ;

  demoCodeFiles: string[] = [
    "src/app/modules/codes/components/drag-n-drop/demo/components/demo-dnd-cats/demo-dnd-cats.component.html",
    "src/app/modules/codes/components/drag-n-drop/demo/components/demo-dnd-cats/demo-dnd-cats.component.ts",
    "src/app/modules/codes/components/drag-n-drop/demo/components/demo-dnd-dogs/demo-dnd-dogs.component.html",
    "src/app/modules/codes/components/drag-n-drop/demo/components/demo-dnd-dogs/demo-dnd-dogs.component.ts",
    "src/app/modules/codes/components/drag-n-drop/demo/model/cat.ts",
    "src/app/modules/codes/components/drag-n-drop/demo/model/dog.ts"
  ] ;

  draggableDirective: string[] = [
    "src/app/modules/codes/components/drag-n-drop/src/draggable.directive.ts"
  ] ;


  droppableDirective: string[] = [
    "src/app/modules/codes/components/drag-n-drop/src/droppable.directive.ts"
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

  public log($event: any) {
    console.log($event);
  }

}
