import {NgModule} from '@angular/core';

import {CodesRoutingModule} from './codes-routing.module';
import {CodesComponent} from './codes.component';
import {SharedModule} from "../shared/shared.module";
import { DragNDropPageComponent } from './components/drag-n-drop/drag-n-drop-page.component';
import { DraggableDirective } from './components/drag-n-drop/src/draggable.directive';
import {DroppableDirective} from "./components/drag-n-drop/src/droppable.directive";
import { DemoDndCatsComponent } from './components/drag-n-drop/demo/components/demo-dnd-cats/demo-dnd-cats.component';
import {DemoDndDogsComponent} from "./components/drag-n-drop/demo/components/demo-dnd-dogs/demo-dnd-dogs.component";


@NgModule({
  declarations: [
    CodesComponent,
    DragNDropPageComponent,
    DraggableDirective,
    DroppableDirective,
    DemoDndCatsComponent,
    DemoDndDogsComponent

  ],
  imports: [
    SharedModule,
    CodesRoutingModule
  ],
})
export class CodesModule {
}
