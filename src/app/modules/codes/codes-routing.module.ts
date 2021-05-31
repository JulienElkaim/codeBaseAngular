import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DragNDropPageComponent} from "./components/drag-n-drop/drag-n-drop-page.component";
import {JsonEditorPageComponent} from "./components/json-editor/json-editor-page.component";
import {OrderByPageComponent} from "./components/order-by/order-by-page.component";
import {GroupByPageComponent} from "./components/group-by/group-by-page.component";

const routes: Routes = [
  {
    path: 'pipes/group-by', component: GroupByPageComponent
  },
  {
    path: 'pipes/order-by', component: OrderByPageComponent
  },
  {
    path: 'directives/drag-n-drop', component: DragNDropPageComponent
  },
  {
    path: 'directives/json-editor', component: JsonEditorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodesRoutingModule {
}
