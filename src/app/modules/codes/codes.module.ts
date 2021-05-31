import {NgModule} from '@angular/core';

import {CodesRoutingModule} from './codes-routing.module';
import {SharedModule} from "../shared/shared.module";
import { DragNDropPageComponent } from './components/drag-n-drop/drag-n-drop-page.component';
import { DraggableDirective } from './components/drag-n-drop/src/draggable.directive';
import {DroppableDirective} from "./components/drag-n-drop/src/droppable.directive";
import { DemoDndCatsComponent } from './components/drag-n-drop/demo/components/demo-dnd-cats/demo-dnd-cats.component';
import {DemoDndDogsComponent} from "./components/drag-n-drop/demo/components/demo-dnd-dogs/demo-dnd-dogs.component";
import { JsonEditorPageComponent } from './components/json-editor/json-editor-page.component';
import {JsonEditorDirective} from "./components/json-editor/src/json-editor.directive";
import {JsonUtilService} from "./components/json-editor/src/json-util.service";
import { DemoJsonEditorComponent } from './components/json-editor/demo/demo-json-editor/demo-json-editor.component';
import { OrderByPageComponent } from './components/order-by/order-by-page.component';
import { OrderByPipe } from './components/order-by/src/order-by.pipe';
import {DemoOrderByComponent} from "./components/order-by/demo/demo-order-by/demo-order-by.component";
import { GroupByPageComponent } from './components/group-by/group-by-page.component';
import { GroupArrayByPipe } from './components/group-by/src/group-by.pipe';
import {KeyValuePipe} from "@angular/common";
import { DemoGroupByComponent } from './components/group-by/demo/demo-group-by/demo-group-by.component';


@NgModule({
  declarations: [
    DragNDropPageComponent,
    DraggableDirective,
    DroppableDirective,
    DemoDndCatsComponent,
    DemoDndDogsComponent,

    JsonEditorPageComponent,
    JsonEditorDirective,
    DemoJsonEditorComponent,


    OrderByPageComponent,
    OrderByPipe,
    DemoOrderByComponent,
    GroupByPageComponent,
    GroupArrayByPipe,
    DemoGroupByComponent

  ],
  imports: [
    SharedModule,
    CodesRoutingModule
  ],
  providers: [
    JsonUtilService,
    KeyValuePipe
  ]
})
export class CodesModule {
}
