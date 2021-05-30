import {NgModule} from '@angular/core';

import {CodesRoutingModule} from './codes-routing.module';
import {CodesComponent} from './codes.component';
import {SharedModule} from "../shared/shared.module";
import { DragNDropComponent } from './components/drag-n-drop/drag-n-drop.component';
import { DraggableDirective } from './components/drag-n-drop/src/draggable.directive';
import {DroppableDirective} from "./components/drag-n-drop/src/droppable.directive";


@NgModule({
  declarations: [
    CodesComponent,
    DragNDropComponent,
    DraggableDirective,
    DroppableDirective
  ],
  imports: [
    SharedModule,
    CodesRoutingModule
  ],
})
export class CodesModule {
}
